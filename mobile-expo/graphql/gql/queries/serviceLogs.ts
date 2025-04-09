import gql from 'graphql-tag'

export const ServiceLogsQuery = gql`
    query ServiceLogs($paging: CursorPaging!, $filter: ServiceLogFilter!, $sorting: [ServiceLogSort!]!) {
    	serviceLogs(paging: $paging, filter: $filter, sorting: $sorting) {
    		pageInfo {
    			hasNextPage
    			hasPreviousPage
    			startCursor
    			endCursor
    		}
    		edges {
    			node {
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
    		totalCount
    	}
    }
`