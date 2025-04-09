import gql from 'graphql-tag'

export const UserVehicleMaxAggregateFragment = gql`
    fragment UserVehicleMaxAggregateFragment on UserVehicleMaxAggregate {
    	name
    	customModel
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`