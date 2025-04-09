import gql from 'graphql-tag'

export const ServiceLogBillsSumAggregateFragment = gql`
    fragment ServiceLogBillsSumAggregateFragment on ServiceLogBillsSumAggregate {
    	total
    }
`