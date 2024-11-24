import gql from 'graphql-tag'

export const AccountMinAggregateFragment = gql`
    fragment AccountMinAggregateFragment on AccountMinAggregate {
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