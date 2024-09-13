import gql from 'graphql-tag'

export const ShopMemberCountAggregateFragment = gql`
    fragment ShopMemberCountAggregateFragment on ShopMemberCountAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`