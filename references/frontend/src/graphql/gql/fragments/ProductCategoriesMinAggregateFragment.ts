import gql from 'graphql-tag'

export const ProductCategoriesMinAggregateFragment = gql`
    fragment ProductCategoriesMinAggregateFragment on ProductCategoriesMinAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`