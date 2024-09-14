import gql from 'graphql-tag'

export const VehicleBodyFragment = gql`
    fragment VehicleBodyFragment on VehicleBody {
    	name
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`