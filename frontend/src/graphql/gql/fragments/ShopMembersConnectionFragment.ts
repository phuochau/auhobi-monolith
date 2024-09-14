import gql from 'graphql-tag'

export const ShopMembersConnectionFragment = gql`
    fragment ShopMembersConnectionFragment on ShopMembersConnection {
    	totalCount
    }
`