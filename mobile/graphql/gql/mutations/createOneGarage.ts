import gql from 'graphql-tag'

export const CreateOneGarageMutation = gql`
    mutation CreateOneGarage($input: CreateOneGarageInput!) {
    	createOneGarage(input: $input) {
    		name
    		description
    		phone_number
    		gplace_id
    		addressDistanceKm
    		addressDistrict
    		addressCity
    		addressWard
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
    }
`