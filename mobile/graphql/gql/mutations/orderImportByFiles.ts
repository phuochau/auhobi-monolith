import gql from 'graphql-tag'

export const OrderImportByFilesMutation = gql`
    mutation OrderImportByFiles($input: OrderImportInput!) {
    	orderImportByFiles(input: $input) {
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
    }
`