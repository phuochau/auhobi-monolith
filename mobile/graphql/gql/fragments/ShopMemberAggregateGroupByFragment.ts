import gql from 'graphql-tag'

export const ShopMemberAggregateGroupByFragment = gql`
    fragment ShopMemberAggregateGroupByFragment on ShopMemberAggregateGroupBy {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`