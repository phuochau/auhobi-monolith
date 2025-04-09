import gql from 'graphql-tag'

export const UserVehicleAggregateGroupByFragment = gql`
    fragment UserVehicleAggregateGroupByFragment on UserVehicleAggregateGroupBy {
    	name
    	customModel
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`