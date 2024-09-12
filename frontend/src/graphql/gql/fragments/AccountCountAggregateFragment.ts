import gql from 'graphql-tag'

export const AccountCountAggregateFragment = gql`
    fragment AccountCountAggregateFragment on AccountCountAggregate {
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