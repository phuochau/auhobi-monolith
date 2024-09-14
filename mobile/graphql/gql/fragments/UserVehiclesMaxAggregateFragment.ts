import gql from 'graphql-tag'

export const UserVehiclesMaxAggregateFragment = gql`
    fragment UserVehiclesMaxAggregateFragment on UserVehiclesMaxAggregate {
    	name
    	customModel
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`