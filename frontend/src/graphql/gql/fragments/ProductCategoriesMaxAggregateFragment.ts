import gql from 'graphql-tag'

export const ProductCategoriesMaxAggregateFragment = gql`
    fragment ProductCategoriesMaxAggregateFragment on ProductCategoriesMaxAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`