import gql from 'graphql-tag'

export const UserVehicleFragment = gql`
    fragment UserVehicleFragment on UserVehicle {
    	name
    	pic
    	status
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`