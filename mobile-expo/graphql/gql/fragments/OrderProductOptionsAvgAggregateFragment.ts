import gql from 'graphql-tag'

export const OrderProductOptionsAvgAggregateFragment = gql`
    fragment OrderProductOptionsAvgAggregateFragment on OrderProductOptionsAvgAggregate {
    	diffPrice
    }
`