import { Express } from 'express';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'; // ES6
const { graphqlHTTP } = require('express-graphql')
import resolvers from '../resolvers';
//import path from 'path';
//import { readFileSync } from 'fs';
//const { buildSchema } = require('graphql');

//const typeDefs = readFileSync(path.resolve(__dirname, '../schema.graphql'), 'utf8');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world'
        },
      },
    },
  }),
})

console.log('schema',schema)

//const schema = new GraphQLSchema(resolvers)

export const register = (application: Express) => {
  console.log(resolvers)
  application.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );
};
