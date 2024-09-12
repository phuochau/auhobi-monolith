import gql from 'graphql-tag'

export const ProductAvgAggregateFragment = gql`
    fragment ProductAvgAggregateFragment on ProductAvgAggregate {
    	price
    }
`