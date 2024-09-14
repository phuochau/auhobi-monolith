import gql from 'graphql-tag'

export const ProductCategoryConnectionFragment = gql`
    fragment ProductCategoryConnectionFragment on ProductCategoryConnection {
    	totalCount
    }
`