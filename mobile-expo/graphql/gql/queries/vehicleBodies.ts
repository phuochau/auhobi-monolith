import gql from 'graphql-tag'

export const VehicleBodiesQuery = gql`
    query VehicleBodies($paging: CursorPaging!, $filter: VehicleBodyFilter!, $sorting: [VehicleBodySort!]!) {
    	vehicleBodies(paging: $paging, filter: $filter, sorting: $sorting) {
    		pageInfo {
    			hasNextPage
    			hasPreviousPage
    			startCursor
    			endCursor
    		}
    		edges {
    			node {
    				name
    				metadata
    				id
    				createdAt
    				updatedAt
    				deletedAt
    			}
    			cursor
    		}
    	}
    }
`