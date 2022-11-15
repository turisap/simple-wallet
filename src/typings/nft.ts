import "reflect-metadata";

import type { Metadata } from "@utils/nfts";
import { Type } from "class-transformer";

export class NftInfo {
  public name?: string;
  public symbol?: string;
  public description?: string;
  public seller_fee_basis_points?: number;
  public image?: string;
  public external_url?: string;
  @Type(() => Attributes)
  public attributes?: Attributes[];
  @Type(() => Collection)
  public collection?: Collection;
  @Type(() => Properties)
  public properties?: Properties;
}

export class Collection {
  public name?: string;
  public family?: string;
}

export class Properties {
  @Type(() => Files)
  public files?: Files[];
  public category?: string;
  @Type(() => Creators)
  public creators?: Creators[];
}

export class Files {
  public uri?: string;
  public type?: string;
}

export class Creators {
  public address?: string;
  public share?: number;
}

export class Attributes {
  public trait_type?: string;
  public value?: string;
}

export type NftInfoMap = Map<Metadata, NftInfo | null>;
