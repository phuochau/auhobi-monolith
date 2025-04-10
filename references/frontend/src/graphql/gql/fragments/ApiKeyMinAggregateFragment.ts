import gql from 'graphql-tag'

export const ApiKeyMinAggregateFragment = gql`
    fragment ApiKeyMinAggregateFragment on ApiKeyMinAggregate {
    	name
    	id
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`