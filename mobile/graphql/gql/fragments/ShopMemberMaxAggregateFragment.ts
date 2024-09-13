import gql from 'graphql-tag'

export const ShopMemberMaxAggregateFragment = gql`
    fragment ShopMemberMaxAggregateFragment on ShopMemberMaxAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`