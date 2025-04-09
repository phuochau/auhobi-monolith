import gql from 'graphql-tag'

export const ProductAggregateGroupByFragment = gql`
    fragment ProductAggregateGroupByFragment on ProductAggregateGroupBy {
    	sku
    	name
    	price
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`