import gql from 'graphql-tag'

export const ProductCategoryAggregateGroupByFragment = gql`
    fragment ProductCategoryAggregateGroupByFragment on ProductCategoryAggregateGroupBy {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`