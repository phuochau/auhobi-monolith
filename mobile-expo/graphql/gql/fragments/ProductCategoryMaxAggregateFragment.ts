import gql from 'graphql-tag'

export const ProductCategoryMaxAggregateFragment = gql`
    fragment ProductCategoryMaxAggregateFragment on ProductCategoryMaxAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`