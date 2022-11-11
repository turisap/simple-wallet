import type { FC } from "react";
import React from "react";
import { Watch } from "react-loader-spinner";

export const Loader: FC = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color={"#61e309"}
      visible={true}
    />
  );
};

export default Loader;
