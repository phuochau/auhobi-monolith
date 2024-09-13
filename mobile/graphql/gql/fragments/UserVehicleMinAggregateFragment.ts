import gql from 'graphql-tag'

export const UserVehicleMinAggregateFragment = gql`
    fragment UserVehicleMinAggregateFragment on UserVehicleMinAggregate {
    	name
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`