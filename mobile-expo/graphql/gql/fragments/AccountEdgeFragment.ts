import gql from 'graphql-tag'

export const AccountEdgeFragment = gql`
    fragment AccountEdgeFragment on AccountEdge {
    	cursor
    }
`