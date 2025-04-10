import gql from 'graphql-tag'

export const ShopMemberMinAggregateFragment = gql`
    fragment ShopMemberMinAggregateFragment on ShopMemberMinAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`