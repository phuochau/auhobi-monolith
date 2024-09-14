import gql from 'graphql-tag'

export const ShopMemberConnectionFragment = gql`
    fragment ShopMemberConnectionFragment on ShopMemberConnection {
    	totalCount
    }
`