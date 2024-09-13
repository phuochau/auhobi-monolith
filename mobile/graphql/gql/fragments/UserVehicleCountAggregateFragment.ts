import gql from 'graphql-tag'

export const UserVehicleCountAggregateFragment = gql`
    fragment UserVehicleCountAggregateFragment on UserVehicleCountAggregate {
    	name
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`