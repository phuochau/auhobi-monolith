import gql from 'graphql-tag'

export const ProductOptionFragment = gql`
    fragment ProductOptionFragment on ProductOption {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`