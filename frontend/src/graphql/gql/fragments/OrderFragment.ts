import gql from 'graphql-tag'

export const OrderFragment = gql`
    fragment OrderFragment on Order {
    	refId
    	grossPrice
    	discountPrice
    	commissionPercent
    	commissionPrice
    	netPrice
    	note
    	shippingAddressDistanceKm
    	shippingAddressDistrict
    	shippingAddressCity
    	shippingAddressWard
    	shippingAddressFull
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`