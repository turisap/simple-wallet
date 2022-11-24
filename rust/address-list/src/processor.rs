use crate::instructions;
use crate::state;
use borsh::BorshSerialize;
use instructions::FavoriteAddressInstruction;
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    borsh::try_from_slice_unchecked,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program::invoke_signed,
    pubkey::Pubkey,
    system_instruction,
    sysvar::{rent::Rent, Sysvar},
};
use state::AddressAccountState;
use std::convert::TryInto;

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    msg!("processing instructions");

    let instruction = FavoriteAddressInstruction::unpack(instruction_data)?;
    match instruction {
        FavoriteAddressInstruction::AddFavoriteAddress { title, hex } => {
            add_favorite_address(program_id, accounts, title, hex);
        }
    }
    Ok(())
}

pub fn add_favorite_address(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    title: String,
    hex: String,
) -> ProgramResult {
    msg!("Adding favorite address review...");
    msg!("ProgramID: {}", program_id);
    msg!("Title: {}", title);
    msg!("Hex: {}", hex);

    let account_info_iter = &mut accounts.iter();

    let initializer = next_account_info(account_info_iter)?;
    let pda_account = next_account_info(account_info_iter)?;
    let system_program = next_account_info(account_info_iter)?;

    let (pda, bump_seed) = Pubkey::find_program_address(
        &[initializer.key.as_ref(), title.as_bytes().as_ref()],
        program_id,
    );

    let account_len: usize = 1 + 1 + (4 + title.len()) + (4 + hex.len());

    let rent = Rent::get()?;
    let rent_lamports = rent.minimum_balance(account_len);

    invoke_signed(
        &system_instruction::create_account(
            initializer.key,
            pda_account.key,
            rent_lamports,
            account_len.try_into().unwrap(),
            program_id,
        ),
        &[
            initializer.clone(),
            pda_account.clone(),
            system_program.clone(),
        ],
        &[&[
            initializer.key.as_ref(),
            title.as_bytes().as_ref(),
            &[bump_seed],
        ]],
    )?;

    msg!("PDA created: {}", pda);

    msg!("unpacking state account");
    let mut account_data =
        try_from_slice_unchecked::<AddressAccountState>(&pda_account.data.borrow()).unwrap();
    msg!("borrowed account data");

    account_data.title = title;
    account_data.hex = hex;
    account_data.is_initialized = true;

    msg!("serializing account");
    account_data.serialize(&mut &mut pda_account.data.borrow_mut()[..])?;
    msg!("state account serialized");

    Ok(())
}
