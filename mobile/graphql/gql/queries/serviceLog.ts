import gql from 'graphql-tag'

export const ServiceLogQuery = gql`
    query ServiceLog($id: ID!) {
    	serviceLog(id: $id) {
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