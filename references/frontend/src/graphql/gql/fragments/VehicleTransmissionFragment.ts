import gql from 'graphql-tag'

export const VehicleTransmissionFragment = gql`
    fragment VehicleTransmissionFragment on VehicleTransmission {
    	name
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`