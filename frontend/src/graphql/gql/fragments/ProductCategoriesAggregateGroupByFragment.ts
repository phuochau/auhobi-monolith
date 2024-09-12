import gql from 'graphql-tag'

export const ProductCategoriesAggregateGroupByFragment = gql`
    fragment ProductCategoriesAggregateGroupByFragment on ProductCategoriesAggregateGroupBy {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`