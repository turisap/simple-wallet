use borsh::{BorshDeserialize, BorshSerialize};

#[derive(BorshSerialize, BorshDeserialize)]
pub struct AddressAccountState {
    pub is_initialized: bool,
    pub title: String,
    pub hex: String,
}
