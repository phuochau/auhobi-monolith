import gql from 'graphql-tag'

export const AccountMinAggregateFragment = gql`
    fragment AccountMinAggregateFragment on AccountMinAggregate {
    	authMethod
    	email
    	role
    	firstName
    	lastName
    	appleUserId
    	facebookUserId
    	googleUserId
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`