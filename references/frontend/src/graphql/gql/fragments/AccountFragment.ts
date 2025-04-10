import gql from 'graphql-tag'

export const AccountFragment = gql`
    fragment AccountFragment on Account {
    	email
    	role
    	firstName
    	lastName
    	id
    	emailVerified
    	createdAt
    	updatedAt
    	deletedAt
    }
`