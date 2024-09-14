import gql from 'graphql-tag'

export const ProductSumAggregateFragment = gql`
    fragment ProductSumAggregateFragment on ProductSumAggregate {
    	price
    }
`