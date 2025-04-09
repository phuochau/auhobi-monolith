import gql from 'graphql-tag'

export const AccountMaxAggregateFragment = gql`
    fragment AccountMaxAggregateFragment on AccountMaxAggregate {
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
    	createdAt
    	updatedAt
    	deletedAt
    }
`