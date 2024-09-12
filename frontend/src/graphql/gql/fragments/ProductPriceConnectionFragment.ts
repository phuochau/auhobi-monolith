import gql from 'graphql-tag'

export const ProductPriceConnectionFragment = gql`
    fragment ProductPriceConnectionFragment on ProductPriceConnection {
    	totalCount
    }
`