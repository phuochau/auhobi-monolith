import gql from 'graphql-tag'

export const VehicleBaseModelFragment = gql`
    fragment VehicleBaseModelFragment on VehicleBaseModel {
    	refId
    	name
    	image
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`