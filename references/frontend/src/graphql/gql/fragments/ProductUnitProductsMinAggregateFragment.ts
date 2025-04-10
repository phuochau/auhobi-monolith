import gql from 'graphql-tag'

export const ProductUnitProductsMinAggregateFragment = gql`
    fragment ProductUnitProductsMinAggregateFragment on ProductUnitProductsMinAggregate {
    	sku
    	name
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`