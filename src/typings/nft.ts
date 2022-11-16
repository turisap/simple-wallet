import type { Metadata } from "@utils/nfts";

export interface NftInfo {
  name: string;
  symbol: string;
  description: string;
  seller_fee_basis_points: number;
  image: string;
  external_url: string;
  attributes: Attribute[];
  collection: Collection;
  properties: Properties;
}

export interface Attribute {
  trait_type: string;
  value: string;
}

export interface Collection {
  name: string;
  family: string;
}

export interface Properties {
  files: File[];
  category: string;
  creators: Creator[];
}

export interface Creator {
  address: string;
  share: number;
}

export interface File {
  uri: string;
  type: string;
}

export type NftInfoMap = Map<Metadata, NftInfo | null>;
