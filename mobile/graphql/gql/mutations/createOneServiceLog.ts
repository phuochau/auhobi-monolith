import gql from 'graphql-tag'

export const CreateOneServiceLogMutation = gql`
    mutation CreateOneServiceLog($input: CreateOneServiceLogInput!) {
    	createOneServiceLog(input: $input) {
    		description
    		date
    		mileage
    		type
    		media
    		id
    		createdAt
    		updatedAt
    		deletedAt
    		garage {
    			name
    			description
    			address
    			lat
    			lng
    			logo
    			media
    			status
    			metadata
    			id
    		}
    		bills {
    			nodes {
    				total
    				media
    				id
    				createdAt
    				updatedAt
    				deletedAt
    			}
    		}
    	}
    }
`