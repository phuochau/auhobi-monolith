import gql from 'graphql-tag'

export const ShopMembersMaxAggregateFragment = gql`
    fragment ShopMembersMaxAggregateFragment on ShopMembersMaxAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`