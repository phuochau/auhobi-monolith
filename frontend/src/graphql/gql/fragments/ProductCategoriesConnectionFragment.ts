import gql from 'graphql-tag'

export const ProductCategoriesConnectionFragment = gql`
    fragment ProductCategoriesConnectionFragment on ProductCategoriesConnection {
    	totalCount
    }
`