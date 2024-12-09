import gql from 'graphql-tag'

export const VehicleBrandFragment = gql`
    fragment VehicleBrandFragment on VehicleBrand {
    	name
    	logo
    	startYear
    	endYear
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`