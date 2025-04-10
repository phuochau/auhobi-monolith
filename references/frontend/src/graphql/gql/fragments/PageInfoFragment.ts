import gql from 'graphql-tag'

export const PageInfoFragment = gql`
    fragment PageInfoFragment on PageInfo {
    	hasNextPage
    	hasPreviousPage
    	startCursor
    	endCursor
    }
`