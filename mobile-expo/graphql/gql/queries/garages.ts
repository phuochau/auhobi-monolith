import gql from 'graphql-tag'

export const GaragesQuery = gql`
    query Garages($paging: CursorPaging!, $filter: GarageFilter!, $sorting: [GarageSort!]!) {
    	garages(paging: $paging, filter: $filter, sorting: $sorting) {
    		pageInfo {
    			hasNextPage
    			hasPreviousPage
    			startCursor
    			endCursor
    		}
    		edges {
    			node {
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
    			cursor
    		}
    		totalCount
    	}
    }
`