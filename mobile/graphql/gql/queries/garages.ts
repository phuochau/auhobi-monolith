import gql from 'graphql-tag'

export const GaragesQuery = gql`
    query Garages($paging: CursorPaging!, $filter: GarageFilter!, $sorting: [GarageSort!]!) {
    	garages(paging: $paging, filter: $filter, sorting: $sorting) {
    		edges {
    			node {
    				name
    				description
    				phone_number
    				gplace_id
    				addressDistanceKm
    				addressDistrict
    				addressCity
    				addressWard
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
    		}
    	}
    }
`