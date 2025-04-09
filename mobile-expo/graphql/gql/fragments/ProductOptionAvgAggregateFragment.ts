import gql from 'graphql-tag'

export const ProductOptionAvgAggregateFragment = gql`
    fragment ProductOptionAvgAggregateFragment on ProductOptionAvgAggregate {
    	diffPrice
    }
`