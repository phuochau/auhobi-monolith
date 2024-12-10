import gql from 'graphql-tag'

export const VehicleBaseModelFragment = gql`
    fragment VehicleBaseModelFragment on VehicleBaseModel {
    	refId
    	name
    	image
    	startYear
    	endYear
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`