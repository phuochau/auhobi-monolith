import gql from 'graphql-tag'

export const OrderProductSumAggregateFragment = gql`
    fragment OrderProductSumAggregateFragment on OrderProductSumAggregate {
    	quantity
    	grossPrice
    	discountPrice
    	netPrice
    }
`