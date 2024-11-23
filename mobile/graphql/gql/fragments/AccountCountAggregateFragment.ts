import gql from 'graphql-tag'

export const AccountCountAggregateFragment = gql`
    fragment AccountCountAggregateFragment on AccountCountAggregate {
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