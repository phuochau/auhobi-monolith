import gql from 'graphql-tag'

export const VehicleModelBodyFragment = gql`
    fragment VehicleModelBodyFragment on VehicleModelBody {
    	picture
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`