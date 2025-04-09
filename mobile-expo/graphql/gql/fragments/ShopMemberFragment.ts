import gql from 'graphql-tag'

export const ShopMemberFragment = gql`
    fragment ShopMemberFragment on ShopMember {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`