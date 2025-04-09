import gql from 'graphql-tag'

export const ShopFragment = gql`
    fragment ShopFragment on Shop {
    	name
    	details
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`