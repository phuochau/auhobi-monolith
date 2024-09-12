import gql from 'graphql-tag'

export const CustomerAddressesCountAggregateFragment = gql`
    fragment CustomerAddressesCountAggregateFragment on CustomerAddressesCountAggregate {
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