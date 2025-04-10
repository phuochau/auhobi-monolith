import gql from 'graphql-tag'

export const ProductOptionGroupProductsCountAggregateFragment = gql`
    fragment ProductOptionGroupProductsCountAggregateFragment on ProductOptionGroupProductsCountAggregate {
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