import gql from 'graphql-tag'

export const ProductPriceSumAggregateFragment = gql`
    fragment ProductPriceSumAggregateFragment on ProductPriceSumAggregate {
    	price
    }
`