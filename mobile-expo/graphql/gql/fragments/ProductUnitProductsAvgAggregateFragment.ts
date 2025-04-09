import gql from 'graphql-tag'

export const ProductUnitProductsAvgAggregateFragment = gql`
    fragment ProductUnitProductsAvgAggregateFragment on ProductUnitProductsAvgAggregate {
    	price
    }
`