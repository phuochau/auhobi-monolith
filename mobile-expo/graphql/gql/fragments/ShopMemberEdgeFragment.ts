import gql from 'graphql-tag'

export const ShopMemberEdgeFragment = gql`
    fragment ShopMemberEdgeFragment on ShopMemberEdge {
    	cursor
    }
`