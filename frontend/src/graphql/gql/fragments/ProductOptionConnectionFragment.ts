import gql from 'graphql-tag'

export const ProductOptionConnectionFragment = gql`
    fragment ProductOptionConnectionFragment on ProductOptionConnection {
    	totalCount
    }
`