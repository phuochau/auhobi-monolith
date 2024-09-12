import gql from 'graphql-tag'

export const ProductCategoriesCountAggregateFragment = gql`
    fragment ProductCategoriesCountAggregateFragment on ProductCategoriesCountAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`