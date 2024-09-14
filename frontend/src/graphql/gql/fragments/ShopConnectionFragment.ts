import gql from 'graphql-tag'

export const ShopConnectionFragment = gql`
    fragment ShopConnectionFragment on ShopConnection {
    	totalCount
    }
`