import gql from 'graphql-tag'

export const AccountMaxAggregateFragment = gql`
    fragment AccountMaxAggregateFragment on AccountMaxAggregate {
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