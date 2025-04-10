import gql from 'graphql-tag'

export const CustomerAggregateGroupByFragment = gql`
    fragment CustomerAggregateGroupByFragment on CustomerAggregateGroupBy {
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