import gql from 'graphql-tag'

export const ProductFragment = gql`
    fragment ProductFragment on Product {
    	sku
    	image
    	name
    	price
    	description
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`