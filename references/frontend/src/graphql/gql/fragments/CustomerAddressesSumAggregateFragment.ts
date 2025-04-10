import gql from 'graphql-tag'

export const CustomerAddressesSumAggregateFragment = gql`
    fragment CustomerAddressesSumAggregateFragment on CustomerAddressesSumAggregate {
    	distanceKm
    }
`