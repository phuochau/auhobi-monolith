import gql from 'graphql-tag'

export const OrderSumAggregateFragment = gql`
    fragment OrderSumAggregateFragment on OrderSumAggregate {
    	grossPrice
    	discountPrice
    	commissionPercent
    	commissionPrice
    	netPrice
    }
`