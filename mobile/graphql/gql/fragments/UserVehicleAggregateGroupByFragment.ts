import gql from 'graphql-tag'

export const UserVehicleAggregateGroupByFragment = gql`
    fragment UserVehicleAggregateGroupByFragment on UserVehicleAggregateGroupBy {
    	name
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`