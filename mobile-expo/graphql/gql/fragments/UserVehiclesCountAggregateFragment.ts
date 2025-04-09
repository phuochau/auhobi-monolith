import gql from 'graphql-tag'

export const UserVehiclesCountAggregateFragment = gql`
    fragment UserVehiclesCountAggregateFragment on UserVehiclesCountAggregate {
    	name
    	customModel
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`