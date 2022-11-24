use crate::instructions;
use instructions::FavoriteAddressInstruction;
use solana_program::{account_info::AccountInfo, entrypoint::ProgramResult, msg, pubkey::Pubkey};

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

    Ok(())
}
