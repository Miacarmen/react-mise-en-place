const { gql } = require('apollo-server-express');

// typeDefs define our Schema and its types
// each type object contains a collection of fields that describes the data

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    email: String!
    password: String!
    # User has many checklists, which refrences the Checklist model
    checklists: [Checklist]
  }

  type Checklist {
    id: ID!
    title: String!
    createdAt: Date
    # checklist has many items
    items: [ChecklistItem]
  }

  type ChecklistItem {
    id: ID!
    name: String!
    desc: String
    createdAt: Date
    completeBy: String
    completed: Boolean
  }

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    # all users
    user: User
    # all checklists
    checklists: [Checklist]
    # one checklist by ID
    checklist(checklistId: ID!): Checklist
    # all checked items
    # all unchecked items
  }

  type Mutation {
    createUser(firstName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # create new checklist
    createChecklist(title: String!): [Checklist]
    # delete checklist by ID
    deleteChecklist(checklistId: ID!): [Checklist]
    # create checklist item
    addChecklistItem(itemId: ID!, itemName: String!): [ChecklistItem]
    # update checklist item
    updateItem(itemId: ID, itemName: String, desc: String, completeBy: Date, completed: Boolean)
    # delete checklist item
    deleteChecklistItem(checklistId: ID!, itemId: ID!): [ChecklistItem]
    # check item as done
    markComplete(checklistId: ID!, itemId: ID!): [ChecklistItem]
    # uncheck item as not done
    markIncomplete(checklistId: ID!, itemId: ID!): [ChecklistItem]
    # check/uncheck all items as done
    # markAllItems(checklistId: ID!): [ChecklistItem]
  }
`;

module.exports = typeDefs;
