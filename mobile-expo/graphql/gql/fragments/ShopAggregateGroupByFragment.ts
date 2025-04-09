import gql from 'graphql-tag'

export const ShopAggregateGroupByFragment = gql`
    fragment ShopAggregateGroupByFragment on ShopAggregateGroupBy {
    	name
    	details
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`