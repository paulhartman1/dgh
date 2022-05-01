// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Art, ArtCategory } = initSchema(schema);

export {
  Art,
  ArtCategory
};