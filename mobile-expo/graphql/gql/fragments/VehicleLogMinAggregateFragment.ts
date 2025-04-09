import gql from 'graphql-tag'

export const VehicleLogMinAggregateFragment = gql`
    fragment VehicleLogMinAggregateFragment on VehicleLogMinAggregate {
    	description
    	date
    	type
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`