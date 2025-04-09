import gql from 'graphql-tag'

export const ProductCategoryProductsConnectionFragment = gql`
    fragment ProductCategoryProductsConnectionFragment on ProductCategoryProductsConnection {
    	totalCount
    }
`