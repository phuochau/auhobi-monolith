import gql from 'graphql-tag'

export const OrderAvgAggregateFragment = gql`
    fragment OrderAvgAggregateFragment on OrderAvgAggregate {
    	grossPrice
    	discountPrice
    	commissionPercent
    	commissionPrice
    	netPrice
    }
`