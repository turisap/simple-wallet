use borsh::BorshDeserialize;
use solana_program::program_error::ProgramError;

pub enum FavoriteAddressInstruction {
    AddFavoriteAddress { title: String, hex: String },
    UpdateFavoriteAddress { title: String, hex: String },
}

#[derive(BorshDeserialize)]
struct FavoriteAddressPayload {
    title: String,
    hex: String,
}

impl FavoriteAddressInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input
            .split_first()
            .ok_or(ProgramError::InvalidInstructionData)?;
        let payload = FavoriteAddressPayload::try_from_slice(rest).unwrap();

        Ok(match variant {
            0 => Self::AddFavoriteAddress {
                title: payload.title,
                hex: payload.hex,
            },
            1 => Self::UpdateFavoriteAddress {
                title: payload.title,
                hex: payload.hex,
            },
            _ => return Err(ProgramError::InvalidInstructionData),
        })
    }
}
