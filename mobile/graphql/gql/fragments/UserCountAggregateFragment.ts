import gql from 'graphql-tag'

export const UserCountAggregateFragment = gql`
    fragment UserCountAggregateFragment on UserCountAggregate {
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`