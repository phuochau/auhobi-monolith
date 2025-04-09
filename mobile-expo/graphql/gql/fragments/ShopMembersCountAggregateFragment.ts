import gql from 'graphql-tag'

export const ShopMembersCountAggregateFragment = gql`
    fragment ShopMembersCountAggregateFragment on ShopMembersCountAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`