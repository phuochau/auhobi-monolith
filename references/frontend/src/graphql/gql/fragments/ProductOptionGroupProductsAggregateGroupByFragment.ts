import gql from 'graphql-tag'

export const ProductOptionGroupProductsAggregateGroupByFragment = gql`
    fragment ProductOptionGroupProductsAggregateGroupByFragment on ProductOptionGroupProductsAggregateGroupBy {
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