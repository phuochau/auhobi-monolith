import gql from 'graphql-tag'

export const AccountFragment = gql`
    fragment AccountFragment on Account {
    	authMethods
    	email
    	role
    	firstName
    	lastName
    	phoneNumber
    	appleUserId
    	facebookUserId
    	googleUserId
    	id
    	isActivated
    	emailVerified
    	phoneVerified
    	createdAt
    	updatedAt
    	deletedAt
    }
`