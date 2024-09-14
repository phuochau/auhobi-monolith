import gql from 'graphql-tag'

export const ProductOptionGroupConnectionFragment = gql`
    fragment ProductOptionGroupConnectionFragment on ProductOptionGroupConnection {
    	totalCount
    }
`