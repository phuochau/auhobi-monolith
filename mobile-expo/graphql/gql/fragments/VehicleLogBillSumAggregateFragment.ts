import gql from 'graphql-tag'

export const VehicleLogBillSumAggregateFragment = gql`
    fragment VehicleLogBillSumAggregateFragment on VehicleLogBillSumAggregate {
    	total
    }
`