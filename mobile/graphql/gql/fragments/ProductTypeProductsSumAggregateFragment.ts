import gql from 'graphql-tag'

export const ProductTypeProductsSumAggregateFragment = gql`
    fragment ProductTypeProductsSumAggregateFragment on ProductTypeProductsSumAggregate {
    	price
    }
`