import gql from 'graphql-tag'

export const CustomerCountAggregateFragment = gql`
    fragment CustomerCountAggregateFragment on CustomerCountAggregate {
    	phone
    	email
    	firstName
    	lastName
    	gender
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`