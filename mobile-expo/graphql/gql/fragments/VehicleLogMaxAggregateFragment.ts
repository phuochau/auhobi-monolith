import gql from 'graphql-tag'

export const VehicleLogMaxAggregateFragment = gql`
    fragment VehicleLogMaxAggregateFragment on VehicleLogMaxAggregate {
    	description
    	date
    	type
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`