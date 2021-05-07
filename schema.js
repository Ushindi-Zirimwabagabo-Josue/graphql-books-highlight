const { gql } = require('apollo-server');

const typeDefs = gql `
  # The schema will go here
  # We define a new type object 'Highlight'
  # Each Highlight has an id, a title, a content, and an author
  # ! marks makes the field required

  type Highlight {
    id: ID!
    title: String!
    content: String
    author: String
  }

  # Now we need to provide a description of how a client will fetch data. and we do this within a Query type
  # When requesting all of our highlights, the data will be returned as an array (represented as [Highlight])
  # and when we want to retrieve a single highlight we will need to pass an ID as a parameter.

  type Query {
    highlights: [Highlight]!
    highlight(id: ID!): Highlight
  }

  type Mutation {
    createHighlight(title: String!, content: String, author: String): Highlight!
    updateHighlight(
      id: ID!
      title: String!
      content: String
      author: String
    ): Highlight!
    deleteHighlight(id: ID!): Highlight!
  }
`;

module.exports = typeDefs;