import gql from 'graphql-tag'

export const AccountMinAggregateFragment = gql`
    fragment AccountMinAggregateFragment on AccountMinAggregate {
    	email
    	role
    	firstName
    	lastName
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`