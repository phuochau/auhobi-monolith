import gql from 'graphql-tag'

export const CustomerEdgeFragment = gql`
    fragment CustomerEdgeFragment on CustomerEdge {
    	cursor
    }
`