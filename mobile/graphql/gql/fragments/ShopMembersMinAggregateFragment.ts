import gql from 'graphql-tag'

export const ShopMembersMinAggregateFragment = gql`
    fragment ShopMembersMinAggregateFragment on ShopMembersMinAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`