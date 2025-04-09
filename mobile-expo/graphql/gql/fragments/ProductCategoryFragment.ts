import gql from 'graphql-tag'

export const ProductCategoryFragment = gql`
    fragment ProductCategoryFragment on ProductCategory {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`