import gql from 'graphql-tag'

export const OrderProductOptionsSumAggregateFragment = gql`
    fragment OrderProductOptionsSumAggregateFragment on OrderProductOptionsSumAggregate {
    	diffPrice
    }
`