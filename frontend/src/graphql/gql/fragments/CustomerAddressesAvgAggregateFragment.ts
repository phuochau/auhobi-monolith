import gql from 'graphql-tag'

export const CustomerAddressesAvgAggregateFragment = gql`
    fragment CustomerAddressesAvgAggregateFragment on CustomerAddressesAvgAggregate {
    	distanceKm
    }
`