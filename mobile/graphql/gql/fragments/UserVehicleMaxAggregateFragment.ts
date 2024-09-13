import gql from 'graphql-tag'

export const UserVehicleMaxAggregateFragment = gql`
    fragment UserVehicleMaxAggregateFragment on UserVehicleMaxAggregate {
    	name
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`