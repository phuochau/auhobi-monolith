import gql from 'graphql-tag'

export const ProductTypeFragment = gql`
    fragment ProductTypeFragment on ProductType {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`