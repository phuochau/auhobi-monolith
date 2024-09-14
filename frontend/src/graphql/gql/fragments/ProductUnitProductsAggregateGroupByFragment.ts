import gql from 'graphql-tag'

export const ProductUnitProductsAggregateGroupByFragment = gql`
    fragment ProductUnitProductsAggregateGroupByFragment on ProductUnitProductsAggregateGroupBy {
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