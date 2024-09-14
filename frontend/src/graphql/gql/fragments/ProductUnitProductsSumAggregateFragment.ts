import gql from 'graphql-tag'

export const ProductUnitProductsSumAggregateFragment = gql`
    fragment ProductUnitProductsSumAggregateFragment on ProductUnitProductsSumAggregate {
    	price
    }
`