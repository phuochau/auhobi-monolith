import gql from 'graphql-tag'

export const ProductEdgeFragment = gql`
    fragment ProductEdgeFragment on ProductEdge {
    	cursor
    }
`