import gql from 'graphql-tag'

export const CreateOneServiceLogMutation = gql`
    mutation CreateOneServiceLog($input: CreateOneServiceLogInput!) {
    	createOneServiceLog(input: $input) {
    		type
    		description
    		date
    		mileage
    		media
    		customGarage
    		id
    		createdAt
    		updatedAt
    		deletedAt
			links
    		garage {
    			id
    		}
    		bills {
    			nodes {
    				id
    			}
    		}
    	}
    }
`