import gql from 'graphql-tag'

export const CustomerAddressesMinAggregateFragment = gql`
    fragment CustomerAddressesMinAggregateFragment on CustomerAddressesMinAggregate {
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