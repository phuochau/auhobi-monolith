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
    	shippingAddressStreetAndNo
    	shippingAddressWard
    	shippingAddressDistrict
    	shippingAddressCity
    	shippingAddressCoutry
    	shippingAddressPostalCode
    	shippingAddressFull
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`