import gql from 'graphql-tag'

export const ProductTypeProductsMaxAggregateFragment = gql`
    fragment ProductTypeProductsMaxAggregateFragment on ProductTypeProductsMaxAggregate {
    	sku
    	name
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`