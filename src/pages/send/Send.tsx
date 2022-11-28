import type { FC } from "react";
import React, { useEffect, useState } from "react";
import type { OptionProps, Theme } from "react-select";
import ReactSelect from "react-select";

import { TokenLogo } from "@components/TokenLogo";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { WalletStore } from "@stores/walletStore";
import {
  ErrorMessage,
  Input as InputAmount,
  InputWithError,
} from "@styled/common";
import { Heading } from "@styled/layout";
import {
  Amount,
  ContentContainer,
  FormText,
  Maxbutton,
  Option,
  OptionLabel,
  SendButton,
  styles,
} from "@styled/send";
import { theme as appTheme } from "@styled/theme";
import type { TokenOption } from "@typings/wallet";
import { logger } from "@utils/logger";
import { observer } from "mobx-react-lite";
import { container } from "tsyringe";

type FormErrors = {
  address: null | string;
  amount: null | string;
};

const defaultErrorsState = {
  address: null,
  amount: null,
};

export const Send: FC = observer(() => {
  const [amount, setAmount] = useState<number>(0);
  const [selected, setSelected] = useState<TokenOption | null>();
  const [address, setAddress] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>(defaultErrorsState);
  const { publicKey, sendTransaction } = useWallet();
  const walletStore = container.resolve(WalletStore);

  useEffect(() => {
    if (publicKey) {
      walletStore.loadWallet(publicKey);
    }
  }, []);

  const validateAddress = (value: string) => {
    try {
      PublicKey.isOnCurve(value);
      setErrors({ ...errors, address: null });
    } catch (e) {
      setErrors({ ...errors, address: "Not valid address" });
    } finally {
      setAddress(value);
    }
  };

  const canSend =
    !errors.amount && !errors.address && Boolean(address) && Boolean(amount);

  const sendSpl = () => {
    if (!publicKey) {
      throw new WalletNotConnectedError();
    }

    walletStore
      .sendSpl(address, publicKey, sendTransaction)
      .then(() => logger.info("Transaction sent"))
      .catch((e) => logger.error(e))
      .finally(() => {
        setAmount(0);
        setAddress("");
        setErrors(defaultErrorsState);
      });
  };

  return (
    <ContentContainer>
      <Heading>Send</Heading>
      <FormText>Token:</FormText>
      <ReactSelect<TokenOption>
        placeholder={"select token"}
        /* eslint-disable @typescript-eslint/naming-convention  */
        styles={styles}
        components={{
          ClearIndicator: () => null,
          IndicatorSeparator: () => null,
          Option: (props: OptionProps<TokenOption, false>) => {
            return (
              <div {...props.innerProps}>
                <Option>
                  <TokenLogo src={props.data.logo} size={20} />
                  <OptionLabel>{props.data.label}</OptionLabel>
                </Option>
              </div>
            );
          },
        }}
        options={walletStore.tokenOptions}
        defaultValue={walletStore.tokenOptions[0]}
        value={selected}
        onChange={setSelected}
        theme={(theme: Theme) => ({
          ...theme,
          borderRadius: 16,
          colors: {
            ...theme.colors,
            primary25: appTheme.primary,
            neutral0: appTheme.backgrounds.input as string, // background
            neutral10: "transparent",
            neutral20: "transparent",
            neutral30: "transparent",
            neutral50: appTheme.text.input as string,
            neutral80: appTheme.primary,
            neutral60: appTheme.primary,
          },
        })}
        /* eslint-enable @typescript-eslint/naming-convention */
      />
      <FormText>Amount:</FormText>
      <Amount>
        <InputWithError>
          <InputAmount
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value || "0"))}
          />
          {errors.amount && <ErrorMessage>{errors.amount}</ErrorMessage>}
        </InputWithError>
        <Maxbutton
          onClick={() => setAmount(parseFloat(selected?.amount || "0"))}
        >
          MAX
        </Maxbutton>
      </Amount>
      <FormText>Address:</FormText>
      <InputWithError>
        <InputAmount
          value={address}
          onChange={(e) => validateAddress(e.target.value)}
        />
        {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
      </InputWithError>
      <SendButton disabled={!canSend} onClick={sendSpl}>
        Send
      </SendButton>
    </ContentContainer>
  );
});

export default Send;
