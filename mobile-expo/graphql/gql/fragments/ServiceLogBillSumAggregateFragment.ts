import gql from 'graphql-tag'

export const ServiceLogBillSumAggregateFragment = gql`
    fragment ServiceLogBillSumAggregateFragment on ServiceLogBillSumAggregate {
    	total
    }
`