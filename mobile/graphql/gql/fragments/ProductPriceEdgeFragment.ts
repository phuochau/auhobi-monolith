import gql from 'graphql-tag'

export const ProductPriceEdgeFragment = gql`
    fragment ProductPriceEdgeFragment on ProductPriceEdge {
    	cursor
    }
`