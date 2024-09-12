import gql from 'graphql-tag'

export const ProductUnitProductsConnectionFragment = gql`
    fragment ProductUnitProductsConnectionFragment on ProductUnitProductsConnection {
    	totalCount
    }
`