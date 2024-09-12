import gql from 'graphql-tag'

export const OrderProductFragment = gql`
    fragment OrderProductFragment on OrderProduct {
    	quantity
    	grossPrice
    	discountPrice
    	netPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`