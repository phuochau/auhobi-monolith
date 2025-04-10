import gql from 'graphql-tag'

export const ProductCategoryProductsMaxAggregateFragment = gql`
    fragment ProductCategoryProductsMaxAggregateFragment on ProductCategoryProductsMaxAggregate {
    	sku
    	name
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`