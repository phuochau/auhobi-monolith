import gql from 'graphql-tag'

export const ProductCategoryProductsAvgAggregateFragment = gql`
    fragment ProductCategoryProductsAvgAggregateFragment on ProductCategoryProductsAvgAggregate {
    	price
    }
`