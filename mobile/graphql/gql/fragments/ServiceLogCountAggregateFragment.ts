import gql from 'graphql-tag'

export const ServiceLogCountAggregateFragment = gql`
    fragment ServiceLogCountAggregateFragment on ServiceLogCountAggregate {
    	type
    	description
    	date
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`