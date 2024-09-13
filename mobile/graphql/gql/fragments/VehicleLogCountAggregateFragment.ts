import gql from 'graphql-tag'

export const VehicleLogCountAggregateFragment = gql`
    fragment VehicleLogCountAggregateFragment on VehicleLogCountAggregate {
    	description
    	date
    	type
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`