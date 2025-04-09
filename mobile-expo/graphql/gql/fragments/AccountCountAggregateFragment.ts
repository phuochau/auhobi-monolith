import gql from 'graphql-tag'

export const AccountCountAggregateFragment = gql`
    fragment AccountCountAggregateFragment on AccountCountAggregate {
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