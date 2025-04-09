import gql from 'graphql-tag'

export const ProductCategoryMinAggregateFragment = gql`
    fragment ProductCategoryMinAggregateFragment on ProductCategoryMinAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`