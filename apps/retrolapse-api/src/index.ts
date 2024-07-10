import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {GraphQLScalarType, Kind} from 'graphql';

const retrospectives = [
  {
    id: 'the-awakening',
    title: 'The Awakening',
    created_at: new Date(2024, 6, 5),
    activities: [
      {
        title: "Liked",
        items: [
          {description: "Pair Programming"},
          {description: "Lunch & Learn"},
          {description: "Data visualization"},
        ]
      },
      {
        title: "Learned",
        items: [
          {description: "Don't automate everything"},
          {description: "5 Why"}
        ]
      },
      {
        title: "Lacked",
        items: [
          {description: "Not enough gin"}
        ]
      },
    ],
  },
  {
    id: 'city-of-glass',
    title: 'City of Glass',
    created_at: new Date(2024, 5, 12),
    activities: [],
  },
];

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (value instanceof Date) {
      return value.toISOString();
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value) {
    if (typeof value === 'string') {
      return new Date(value);
    }
    throw new Error('GraphQL Date Scalar parser expected a `string`');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});

const resolvers = {
  Date: dateScalar,
  Query: {
    retrospectives: () => retrospectives,
    retrospective: (_, {id}) => retrospectives.find(r => r.id === id),
  },
};

const typeDefs = `#graphql
  scalar Date
  
  type Retrospective {
    id: String
    title: String
    created_at: Date
    activities: [Activity]
  }
  
  type Activity {
    title: String
    items: [ActivityItem]
  }
  
  type ActivityItem {
    description: String
  }
  
  type Query {
    retrospectives: [Retrospective]
    retrospective(id: String!): Retrospective
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const {url} = await startStandaloneServer(server, {
  listen: {port: 4000},
});

console.log(`🚀  Server ready at: ${url}`);