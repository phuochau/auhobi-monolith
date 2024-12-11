import gql from 'graphql-tag'

export const VehicleBaseModelsQuery = gql`
    query VehicleBaseModels($paging: CursorPaging!, $filter: VehicleBaseModelFilter!, $sorting: [VehicleBaseModelSort!]!) {
    	vehicleBaseModels(paging: $paging, filter: $filter, sorting: $sorting) {
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
    				image
    				startYear
    				endYear
    				metadata
    				id
						parent {
							id
						}
    				createdAt
    				updatedAt
    				deletedAt
    			}
    			cursor
    		}
    	}
    }
`