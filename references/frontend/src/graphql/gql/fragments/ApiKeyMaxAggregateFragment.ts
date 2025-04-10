import gql from 'graphql-tag'

export const ApiKeyMaxAggregateFragment = gql`
    fragment ApiKeyMaxAggregateFragment on ApiKeyMaxAggregate {
    	name
    	id
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`