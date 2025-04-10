import gql from 'graphql-tag'

export const CustomerMinAggregateFragment = gql`
    fragment CustomerMinAggregateFragment on CustomerMinAggregate {
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