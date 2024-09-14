import gql from 'graphql-tag'

export const UserVehicleMinAggregateFragment = gql`
    fragment UserVehicleMinAggregateFragment on UserVehicleMinAggregate {
    	name
    	customModel
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`