import gql from 'graphql-tag'

export const ProductTypeConnectionFragment = gql`
    fragment ProductTypeConnectionFragment on ProductTypeConnection {
    	totalCount
    }
`