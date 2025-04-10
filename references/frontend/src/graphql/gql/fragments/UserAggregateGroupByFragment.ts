import gql from 'graphql-tag'

export const UserAggregateGroupByFragment = gql`
    fragment UserAggregateGroupByFragment on UserAggregateGroupBy {
    	phone_number
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`