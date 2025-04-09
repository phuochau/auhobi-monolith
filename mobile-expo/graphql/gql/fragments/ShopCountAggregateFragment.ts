import gql from 'graphql-tag'

export const ShopCountAggregateFragment = gql`
    fragment ShopCountAggregateFragment on ShopCountAggregate {
    	name
    	details
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`