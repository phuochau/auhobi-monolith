import gql from 'graphql-tag'

export const ProductUnitConnectionFragment = gql`
    fragment ProductUnitConnectionFragment on ProductUnitConnection {
    	totalCount
    }
`