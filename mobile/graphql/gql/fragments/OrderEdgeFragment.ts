import gql from 'graphql-tag'

export const OrderEdgeFragment = gql`
    fragment OrderEdgeFragment on OrderEdge {
    	cursor
    }
`