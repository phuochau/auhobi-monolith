import gql from 'graphql-tag'

export const ProductCategoryProductsMinAggregateFragment = gql`
    fragment ProductCategoryProductsMinAggregateFragment on ProductCategoryProductsMinAggregate {
    	sku
    	name
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`