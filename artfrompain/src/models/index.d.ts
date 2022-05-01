import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ArtMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArtCategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Art {
  readonly id: string;
  readonly category?: string | null;
  readonly ArtCategory?: ArtCategory | null;
  readonly url?: string | null;
  readonly length?: number | null;
  readonly width?: number | null;
  readonly price?: number | null;
  readonly date_create?: string | null;
  readonly date_sold?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artArtCategoryId?: string | null;
  constructor(init: ModelInit<Art, ArtMetaData>);
  static copyOf(source: Art, mutator: (draft: MutableModel<Art, ArtMetaData>) => MutableModel<Art, ArtMetaData> | void): Art;
}

export declare class ArtCategory {
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ArtCategory, ArtCategoryMetaData>);
  static copyOf(source: ArtCategory, mutator: (draft: MutableModel<ArtCategory, ArtCategoryMetaData>) => MutableModel<ArtCategory, ArtCategoryMetaData> | void): ArtCategory;
}