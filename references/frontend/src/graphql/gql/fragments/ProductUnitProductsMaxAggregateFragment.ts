import gql from 'graphql-tag'

export const ProductUnitProductsMaxAggregateFragment = gql`
    fragment ProductUnitProductsMaxAggregateFragment on ProductUnitProductsMaxAggregate {
    	sku
    	name
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`