import gql from 'graphql-tag'

export const ApiKeyAggregateGroupByFragment = gql`
    fragment ApiKeyAggregateGroupByFragment on ApiKeyAggregateGroupBy {
    	name
    	id
    	expired
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`