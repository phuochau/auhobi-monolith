import gql from 'graphql-tag'

export const OrgsQuery = gql`
    query Orgs($paging: CursorPaging!, $filter: OrgFilter!, $sorting: [OrgSort!]!) {
    	orgs(paging: $paging, filter: $filter, sorting: $sorting) {
    		pageInfo {
    			hasNextPage
    			hasPreviousPage
    			startCursor
    			endCursor
    		}
    		edges {
    			node {
    				name
    				details
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