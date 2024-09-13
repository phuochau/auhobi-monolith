import gql from 'graphql-tag'

export const VehicleLogAggregateGroupByFragment = gql`
    fragment VehicleLogAggregateGroupByFragment on VehicleLogAggregateGroupBy {
    	description
    	date
    	type
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`