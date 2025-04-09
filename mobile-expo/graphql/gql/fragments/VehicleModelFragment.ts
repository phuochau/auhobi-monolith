import gql from 'graphql-tag'

export const VehicleModelFragment = gql`
    fragment VehicleModelFragment on VehicleModel {
    	refId
    	name
    	startYear
    	endYear
    	drive
    	engineType
    	fuelType
    	maxPower
    	maxTorque
    	transmission
    	images
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`