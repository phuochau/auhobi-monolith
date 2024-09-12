import gql from 'graphql-tag'

export const ProductPriceAvgAggregateFragment = gql`
    fragment ProductPriceAvgAggregateFragment on ProductPriceAvgAggregate {
    	price
    }
`