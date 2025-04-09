import gql from 'graphql-tag'

export const ProductOptionGroupFragment = gql`
    fragment ProductOptionGroupFragment on ProductOptionGroup {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`