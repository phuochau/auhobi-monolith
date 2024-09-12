import gql from 'graphql-tag'

export const ProductOptionAggregateGroupByFragment = gql`
    fragment ProductOptionAggregateGroupByFragment on ProductOptionAggregateGroupBy {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`