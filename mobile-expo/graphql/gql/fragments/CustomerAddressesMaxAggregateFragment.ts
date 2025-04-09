import gql from 'graphql-tag'

export const CustomerAddressesMaxAggregateFragment = gql`
    fragment CustomerAddressesMaxAggregateFragment on CustomerAddressesMaxAggregate {
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