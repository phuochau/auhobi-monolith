import gql from 'graphql-tag'

export const UserFragment = gql`
    fragment UserFragment on User {
    	avatar
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`