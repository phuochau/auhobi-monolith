import gql from 'graphql-tag'

export const ProductCategoryProductsSumAggregateFragment = gql`
    fragment ProductCategoryProductsSumAggregateFragment on ProductCategoryProductsSumAggregate {
    	price
    }
`