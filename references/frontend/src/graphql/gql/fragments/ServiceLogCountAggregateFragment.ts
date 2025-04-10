import gql from 'graphql-tag'

export const ServiceLogCountAggregateFragment = gql`
    fragment ServiceLogCountAggregateFragment on ServiceLogCountAggregate {
    	description
    	date
    	type
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`