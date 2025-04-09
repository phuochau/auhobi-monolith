import gql from 'graphql-tag'

export const VehicleLogBillAvgAggregateFragment = gql`
    fragment VehicleLogBillAvgAggregateFragment on VehicleLogBillAvgAggregate {
    	total
    }
`