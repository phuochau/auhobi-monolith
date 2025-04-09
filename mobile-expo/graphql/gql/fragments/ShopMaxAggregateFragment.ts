import gql from 'graphql-tag'

export const ShopMaxAggregateFragment = gql`
    fragment ShopMaxAggregateFragment on ShopMaxAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`