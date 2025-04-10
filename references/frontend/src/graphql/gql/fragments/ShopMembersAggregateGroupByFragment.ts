import gql from 'graphql-tag'

export const ShopMembersAggregateGroupByFragment = gql`
    fragment ShopMembersAggregateGroupByFragment on ShopMembersAggregateGroupBy {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`