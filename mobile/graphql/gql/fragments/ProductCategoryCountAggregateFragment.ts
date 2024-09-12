import gql from 'graphql-tag'

export const ProductCategoryCountAggregateFragment = gql`
    fragment ProductCategoryCountAggregateFragment on ProductCategoryCountAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`