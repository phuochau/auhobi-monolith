import gql from 'graphql-tag'

export const AccountFragment = gql`
    fragment AccountFragment on Account {
    	authMethod
    	email
    	role
    	firstName
    	lastName
    	appleUserId
    	facebookUserId
    	googleUserId
    	id
    	emailVerified
    	isActivated
    	createdAt
    	updatedAt
    	deletedAt
    }
`