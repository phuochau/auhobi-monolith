import gql from 'graphql-tag'

export const ServiceLogBillAvgAggregateFragment = gql`
    fragment ServiceLogBillAvgAggregateFragment on ServiceLogBillAvgAggregate {
    	total
    }
`