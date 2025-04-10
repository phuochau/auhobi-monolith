import gql from 'graphql-tag'

export const VehicleBrandFragment = gql`
    fragment VehicleBrandFragment on VehicleBrand {
    	name
    	startYear
    	endYear
    	logo
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`