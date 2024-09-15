import gql from 'graphql-tag'

export const CreateOneUserVehicleMutation = gql`
    mutation CreateOneUserVehicle($input: CreateOneUserVehicleInput!) {
    	createOneUserVehicle(input: $input) {
    		name
    		customModel
    		picture
    		status
    		metadata
    		id
    		createdAt
    		updatedAt
    		deletedAt
    	}
    }
`