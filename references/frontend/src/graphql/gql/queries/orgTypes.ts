import gql from 'graphql-tag'

export const OrgTypesQuery = gql`
    query OrgTypes($paging: CursorPaging!, $filter: OrgTypeFilter!, $sorting: [OrgTypeSort!]!) {
    	orgTypes(paging: $paging, filter: $filter, sorting: $sorting) {
    		pageInfo {
    			hasNextPage
    			hasPreviousPage
    			startCursor
    			endCursor
    		}
    		edges {
    			node {
    				name
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