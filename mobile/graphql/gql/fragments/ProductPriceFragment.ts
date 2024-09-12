import gql from 'graphql-tag'

export const ProductPriceFragment = gql`
    fragment ProductPriceFragment on ProductPrice {
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`