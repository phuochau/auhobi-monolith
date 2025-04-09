import gql from 'graphql-tag'

export const UserVehiclesAggregateGroupByFragment = gql`
    fragment UserVehiclesAggregateGroupByFragment on UserVehiclesAggregateGroupBy {
    	name
    	customModel
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`