import gql from 'graphql-tag'

export const ApiKeyCountAggregateFragment = gql`
    fragment ApiKeyCountAggregateFragment on ApiKeyCountAggregate {
    	name
    	id
    	expired
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`