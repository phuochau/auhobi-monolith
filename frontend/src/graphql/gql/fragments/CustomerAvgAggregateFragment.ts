import gql from 'graphql-tag'

export const CustomerAvgAggregateFragment = gql`
    fragment CustomerAvgAggregateFragment on CustomerAvgAggregate {
    	gender
    }
`