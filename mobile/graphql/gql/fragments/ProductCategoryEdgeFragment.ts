import gql from 'graphql-tag'

export const ProductCategoryEdgeFragment = gql`
    fragment ProductCategoryEdgeFragment on ProductCategoryEdge {
    	cursor
    }
`