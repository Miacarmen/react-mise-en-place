import { gql } from '@apollo/client';

// current logged in user
export const QUERY_ME = gql`
  query Me {
    me {
      firstName
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user {
    user {
      id
      firstName
      email
      checklists {
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
  }
`;

export const QUERY_CHECKLISTS = gql`
  query allChecklists {
    checklists {
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

export const QUERY_SINGLE_CHECKLIST = gql`
  query singleChecklist($checklistId: ID!) {
    checklist(checklistId: $checklistId) {
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

export const QUERY_SINGLE_CHECKLIST_ITEM = gql`
  query singleChecklistItem($itemId: ID!) {
    checklistItem(itemId: $itemId) {
      id
      name
      desc
      createdAt
      completeBy
      completed
    }
  }
`;
