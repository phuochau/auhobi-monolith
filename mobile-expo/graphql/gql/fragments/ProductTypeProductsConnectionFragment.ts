import gql from 'graphql-tag'

export const ProductTypeProductsConnectionFragment = gql`
    fragment ProductTypeProductsConnectionFragment on ProductTypeProductsConnection {
    	totalCount
    }
`