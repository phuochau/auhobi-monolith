import gql from 'graphql-tag'

export const DeleteOneServiceLogMutation = gql`
    mutation DeleteOneServiceLog($input: DeleteOneServiceLogInput!) {
    	deleteOneServiceLog(input: $input) {
    		type
    		description
    		date
    		mileage
    		links
    		media
    		customGarage
    		id
    		createdAt
    		updatedAt
    		deletedAt
    	}
    }
`