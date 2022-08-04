// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comments, Users, Posts, UsersComments } = initSchema(schema);

export {
  Comments,
  Users,
  Posts,
  UsersComments
};