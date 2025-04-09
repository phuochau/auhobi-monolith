import gql from 'graphql-tag'

export const OrderProductAvgAggregateFragment = gql`
    fragment OrderProductAvgAggregateFragment on OrderProductAvgAggregate {
    	quantity
    	grossPrice
    	discountPrice
    	netPrice
    }
`