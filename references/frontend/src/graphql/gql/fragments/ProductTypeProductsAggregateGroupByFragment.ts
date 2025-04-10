import gql from 'graphql-tag'

export const ProductTypeProductsAggregateGroupByFragment = gql`
    fragment ProductTypeProductsAggregateGroupByFragment on ProductTypeProductsAggregateGroupBy {
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