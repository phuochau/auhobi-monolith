import gql from 'graphql-tag'

export const OffsetPageInfoFragment = gql`
    fragment OffsetPageInfoFragment on OffsetPageInfo {
    	hasNextPage
    	hasPreviousPage
    }
`