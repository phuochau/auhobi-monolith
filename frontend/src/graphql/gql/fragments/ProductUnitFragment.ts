import gql from 'graphql-tag'

export const ProductUnitFragment = gql`
    fragment ProductUnitFragment on ProductUnit {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`