import gql from 'graphql-tag'

export const ProductTypeProductsMinAggregateFragment = gql`
    fragment ProductTypeProductsMinAggregateFragment on ProductTypeProductsMinAggregate {
    	sku
    	name
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`