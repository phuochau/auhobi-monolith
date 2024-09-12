import gql from 'graphql-tag'

export const ProductCategoryProductsAggregateGroupByFragment = gql`
    fragment ProductCategoryProductsAggregateGroupByFragment on ProductCategoryProductsAggregateGroupBy {
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