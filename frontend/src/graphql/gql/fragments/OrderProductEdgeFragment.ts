import gql from 'graphql-tag'

export const OrderProductEdgeFragment = gql`
    fragment OrderProductEdgeFragment on OrderProductEdge {
    	cursor
    }
`