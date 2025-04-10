import gql from 'graphql-tag'

export const ProductOptionGroupProductsConnectionFragment = gql`
    fragment ProductOptionGroupProductsConnectionFragment on ProductOptionGroupProductsConnection {
    	totalCount
    }
`