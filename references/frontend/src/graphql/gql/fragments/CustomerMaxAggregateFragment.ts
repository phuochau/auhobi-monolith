import gql from 'graphql-tag'

export const CustomerMaxAggregateFragment = gql`
    fragment CustomerMaxAggregateFragment on CustomerMaxAggregate {
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