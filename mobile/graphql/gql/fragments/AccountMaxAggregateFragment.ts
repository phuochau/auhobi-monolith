import gql from 'graphql-tag'

export const AccountMaxAggregateFragment = gql`
    fragment AccountMaxAggregateFragment on AccountMaxAggregate {
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