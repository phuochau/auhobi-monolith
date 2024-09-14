import gql from 'graphql-tag'

export const UserVehicleFragment = gql`
    fragment UserVehicleFragment on UserVehicle {
    	name
    	customModel
    	picture
    	status
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`