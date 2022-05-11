import { Express } from 'express';
const { graphqlHTTP } = require('express-graphql');
import resolvers from '../resolvers';
import path from 'path';
import { readFileSync } from 'fs';
const { buildSchema } = require('graphql');

const typeDefs = readFileSync(path.resolve(__dirname, '../schema.graphql'), 'utf8');

//import * as avo from '../modules/avocado/avocado.resolver'

/* var root = {
  hello: () => {
    return 'Hello world!';
  },
  avo: avo.findOne
}; */

export const register = (application: Express) => {
  application.use(
    '/graphql',
    graphqlHTTP({
      schema: buildSchema(typeDefs),
      rootValue: resolvers,
      graphiql: true
    })
  );
};
