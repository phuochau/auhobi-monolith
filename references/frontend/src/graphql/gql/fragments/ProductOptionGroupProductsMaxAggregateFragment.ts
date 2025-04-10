import gql from 'graphql-tag'

export const ProductOptionGroupProductsMaxAggregateFragment = gql`
    fragment ProductOptionGroupProductsMaxAggregateFragment on ProductOptionGroupProductsMaxAggregate {
    	sku
    	name
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`