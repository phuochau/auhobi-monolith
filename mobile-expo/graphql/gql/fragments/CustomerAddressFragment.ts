import gql from 'graphql-tag'

export const CustomerAddressFragment = gql`
    fragment CustomerAddressFragment on CustomerAddress {
    	full
    	distanceKm
    	city
    	district
    	ward
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`