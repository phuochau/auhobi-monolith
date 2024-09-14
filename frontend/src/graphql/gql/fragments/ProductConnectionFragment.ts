import gql from 'graphql-tag'

export const ProductConnectionFragment = gql`
    fragment ProductConnectionFragment on ProductConnection {
    	totalCount
    }
`