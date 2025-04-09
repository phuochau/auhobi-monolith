import gql from 'graphql-tag'

export const UserAggregateGroupByFragment = gql`
    fragment UserAggregateGroupByFragment on UserAggregateGroupBy {
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`