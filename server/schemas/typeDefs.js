const { gql } = require('apollo-server-express');

// typeDefs define our Schema and its types
// each type object contains a collection of fields that describes the data

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    email: String!
    password: String!
    # User has many checklists, which refrences the Checklist model
    checklists: [Checklist]
  }

  type Checklist {
    _id: ID!
    title: String!
    createdOn: Date
    # Checklist has many items, which references ChecklistItem model
    items: [ChecklistItem]
  }

  type ChecklistItem {
    _id: ID!
    name: String!
    createdOn: Date
    completeBy: String
    completed: Boolean
  }

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    # me is the current logged in user
    me: User
    # all users
    user: User
    # all checklists
    checklists: [Checklist]
    # one checklist by ID
    checklist(id: ID!): Checklist
    # TO-DO: all checked items
    # TO-DO: all unchecked items
  }

  type Mutation {
    # add new user
    createUser(name: String!, email: String!, password: String!): Auth

    # login user
    login(email: String!, password: String!): Auth

    # create new checklist
    createChecklist(title: String!): [Checklist]

    # delete checklist by ID
    deleteChecklist(id: ID!): [Checklist]

    # create checklist item
    addChecklistItem(id: ID!, itemName: String!): [ChecklistItem]

    # delete checklist item
    deleteChecklistItem(checklistId: ID!, itemId: ID!): [ChecklistItem]

    # update checklist item
    updateChecklistItem(id: ID, itemName: String, completeBy: Date, completed: Boolean)

    # check item as complete
    markComplete(checklistId: ID!, itemId: ID!): [ChecklistItem]

    # uncheck item as incomplete
    markIncomplete(checklistId: ID!, itemId: ID!): [ChecklistItem]

    # check/uncheck all items 
    markAllItems(checklistId: ID!): [ChecklistItem]
  }
`;

module.exports = typeDefs;
