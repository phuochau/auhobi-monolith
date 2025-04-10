import gql from 'graphql-tag'

export const UserVehicleCountAggregateFragment = gql`
    fragment UserVehicleCountAggregateFragment on UserVehicleCountAggregate {
    	name
    	customModel
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`