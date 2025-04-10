import gql from 'graphql-tag'

export const VehicleEngineFragment = gql`
    fragment VehicleEngineFragment on VehicleEngine {
    	name
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`