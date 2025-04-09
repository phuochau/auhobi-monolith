import gql from 'graphql-tag'

export const ProductOptionGroupsConnectionFragment = gql`
    fragment ProductOptionGroupsConnectionFragment on ProductOptionGroupsConnection {
    	totalCount
    }
`