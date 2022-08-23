import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $email: String!
    $password: String!
  ) {
    createUser(firstName: $firstName, email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const CREATE_CHECKLIST = gql`
  mutation CreateChecklist($title: String!) {
    createChecklist(title: $title) {
      id
      title
      items {
        id
        name
        desc
        createdAt
        completeBy
        completed
      }
    }
  }
`;

export const DELETE_CHECKLIST = gql`
  mutation DeleteChecklist($checklistId: ID!) {
    deleteChecklist(id: $checklistId) {
      id
      title
      createdAt
      items {
        id
        name
        desc
        createdAt
        completeBy
        completed
      }
    }
  }
`;

// export const ADD_CHECKLIST_ITEM = gql`
//   mutation AddChecklistItem($itemId: ID!, $itemName: String!) {
//     addChecklistItem(id: $itemId, itemName: $itemName) {
//       id
//       name
//       createdAt
//       completeBy
//       completed
//     }
//   }
// `;

// export const DELETE_CHECKLIST_ITEM = gql`
//   # find checklist that has an item with this id
//   mutation DeleteChecklistItem($checklistId: id!, $itemId: ID!) {
//     deleteChecklistItem(checklistId: $checklistId, itemId: $itemId) {
//       id
//     }
//   }
// `;

// export const UPDATE_CHECKLIST_ITEM = gql`
//   mutation updateItem(
//     $itemId: ID
//     $itemName: String
//     $desc: String
//     $completeBy: Date
//     $completed: Boolean
//   ) {
//     updateItem(
//       itemId: $itemId
//       itemName: $itemName
//       desc: $desc
//       completeBy: $completeBy
//       completed: $completed
//     ) {
//       id
//     }
//   }
// `;

// export const MARK_COMPLETE = gql`
//   mutation markComplete($checklistId: ID!, $itemId: ID!) {
//     markComplete(checklistId: $checklistId, itemId: $itemId) {
//       id
//       name
//       completed
//     }
//   }
// `;

// export const MARK_INCOMPLETE = gql`
//   mutation markIncomplete($checklistId: ID!, $itemId: ID!) {
//     markIncomplete(checklistId: $checklistId, itemId: $itemId) {
//       id
//       name
//       completed
//     }
//   }
// `;
