import gql from 'graphql-tag'

export const VehicleModelsQuery = gql`
    query VehicleModels($paging: CursorPaging!, $filter: VehicleModelFilter!, $sorting: [VehicleModelSort!]!) {
    	vehicleModels(paging: $paging, filter: $filter, sorting: $sorting) {
    		pageInfo {
    			hasNextPage
    			hasPreviousPage
    			startCursor
    			endCursor
    		}
    		edges {
    			node {
    				refId
    				name
    				startYear
    				endYear
    				drive
    				engineType
    				fuelType
    				maxPower
    				maxTorque
    				transmission
    				images
    				metadata
    				id
    				createdAt
    				updatedAt
    				deletedAt
    				body {
    					name
    					metadata
    					id
    					createdAt
    					updatedAt
    					deletedAt
    				}
    				brand {
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
    				baseModel {
    					refId
    					name
    					image
    					startYear
    					endYear
    					metadata
    					id
    					createdAt
    					updatedAt
    					deletedAt
    				}
    				subBaseModel {
    					refId
    					name
    					image
    					startYear
    					endYear
    					metadata
    					id
    					createdAt
    					updatedAt
    					deletedAt
    				}
    			}
    			cursor
    		}
    	}
    }
`