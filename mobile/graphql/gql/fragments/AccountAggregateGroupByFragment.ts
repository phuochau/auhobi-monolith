import gql from 'graphql-tag'

export const AccountAggregateGroupByFragment = gql`
    fragment AccountAggregateGroupByFragment on AccountAggregateGroupBy {
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