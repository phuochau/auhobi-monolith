import gql from 'graphql-tag'

export const ServiceLogBillsAvgAggregateFragment = gql`
    fragment ServiceLogBillsAvgAggregateFragment on ServiceLogBillsAvgAggregate {
    	total
    }
`