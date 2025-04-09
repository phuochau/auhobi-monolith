import gql from 'graphql-tag'

export const ProductOptionSumAggregateFragment = gql`
    fragment ProductOptionSumAggregateFragment on ProductOptionSumAggregate {
    	diffPrice
    }
`