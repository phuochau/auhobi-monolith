import gql from 'graphql-tag'

export const OrgsWithBranchesQuery = gql`
    query Orgs($paging: CursorPaging!, $filter: OrgFilter!, $sorting: [OrgSort!]!) {
    	orgs(paging: $paging, filter: $filter, sorting: $sorting) {
    		edges {
    			node {
    				type
    				name
    				details
    				enabled
    				id
    				createdAt
    				updatedAt
    				deletedAt
    				members {
    					nodes {
    						role
    						enabled
    						id
    						createdAt
    						updatedAt
    						deletedAt
    					}
    				}
    				branches {
    					nodes {
    						name
    						details
    						enabled
    						id
    						createdAt
    						updatedAt
    						deletedAt
    					}
    				}
    			}
    			cursor
    		}
    	}
    }
`