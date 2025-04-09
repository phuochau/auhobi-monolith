import gql from 'graphql-tag'

export const ShopMinAggregateFragment = gql`
    fragment ShopMinAggregateFragment on ShopMinAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`