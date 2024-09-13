import gql from 'graphql-tag'

export const VehicleLogFragment = gql`
    fragment VehicleLogFragment on VehicleLog {
    	description
    	date
    	mileage
    	type
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`