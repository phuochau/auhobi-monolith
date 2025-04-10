import gql from 'graphql-tag'

export const CustomerAddressesAggregateGroupByFragment = gql`
    fragment CustomerAddressesAggregateGroupByFragment on CustomerAddressesAggregateGroupBy {
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