import gql from 'graphql-tag'

export const ProductUnitProductsCountAggregateFragment = gql`
    fragment ProductUnitProductsCountAggregateFragment on ProductUnitProductsCountAggregate {
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