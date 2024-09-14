import gql from 'graphql-tag'

export const ProductTypeProductsCountAggregateFragment = gql`
    fragment ProductTypeProductsCountAggregateFragment on ProductTypeProductsCountAggregate {
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