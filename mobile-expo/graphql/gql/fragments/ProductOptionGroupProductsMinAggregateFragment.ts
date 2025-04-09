import gql from 'graphql-tag'

export const ProductOptionGroupProductsMinAggregateFragment = gql`
    fragment ProductOptionGroupProductsMinAggregateFragment on ProductOptionGroupProductsMinAggregate {
    	sku
    	name
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`