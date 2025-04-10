import gql from 'graphql-tag'

export const UserFragment = gql`
    fragment UserFragment on User {
    	phone_number
    	avatar
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`