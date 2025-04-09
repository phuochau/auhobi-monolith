import gql from 'graphql-tag'

export const UserVehiclesMinAggregateFragment = gql`
    fragment UserVehiclesMinAggregateFragment on UserVehiclesMinAggregate {
    	name
    	customModel
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`