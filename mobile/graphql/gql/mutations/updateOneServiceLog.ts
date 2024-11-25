import gql from 'graphql-tag'

export const UpdateOneServiceLogMutation = gql`
    mutation UpdateOneServiceLog($input: UpdateOneServiceLogInput!) {
    	updateOneServiceLog(input: $input) {
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