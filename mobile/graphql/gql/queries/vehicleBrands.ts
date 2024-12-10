import gql from 'graphql-tag'

export const VehicleBrandsQuery = gql`
    query VehicleBrands($paging: CursorPaging!, $filter: VehicleBrandFilter!, $sorting: [VehicleBrandSort!]!) {
    	vehicleBrands(paging: $paging, filter: $filter, sorting: $sorting) {
    		pageInfo {
    			hasNextPage
    			hasPreviousPage
    			startCursor
    			endCursor
    		}
    		edges {
    			node {
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
    			cursor
    		}
    	}
    }
`