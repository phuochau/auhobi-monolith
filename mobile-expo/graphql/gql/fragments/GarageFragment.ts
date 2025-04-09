import gql from 'graphql-tag'

export const GarageFragment = gql`
    fragment GarageFragment on Garage {
    	name
    	description
    	phone_number
    	gplace_id
    	addressStreetAndNo
    	addressWard
    	addressDistrict
    	addressCity
    	addressCoutry
    	addressPostalCode
    	addressFull
    	lat
    	lng
    	logo
    	media
    	status
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`