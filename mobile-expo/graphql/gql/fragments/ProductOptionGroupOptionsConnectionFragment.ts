import gql from 'graphql-tag'

export const ProductOptionGroupOptionsConnectionFragment = gql`
    fragment ProductOptionGroupOptionsConnectionFragment on ProductOptionGroupOptionsConnection {
    	totalCount
    }
`