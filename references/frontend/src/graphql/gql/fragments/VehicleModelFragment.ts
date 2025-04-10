import gql from 'graphql-tag'

export const VehicleModelFragment = gql`
    fragment VehicleModelFragment on VehicleModel {
    	name
    	startYear
    	metadata
    	id
    	endYear
    	createdAt
    	updatedAt
    	deletedAt
    }
`