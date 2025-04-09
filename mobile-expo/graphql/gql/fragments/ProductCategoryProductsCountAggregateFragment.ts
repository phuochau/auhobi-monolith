import gql from 'graphql-tag'

export const ProductCategoryProductsCountAggregateFragment = gql`
    fragment ProductCategoryProductsCountAggregateFragment on ProductCategoryProductsCountAggregate {
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