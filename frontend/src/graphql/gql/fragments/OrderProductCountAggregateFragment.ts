import gql from 'graphql-tag'

export const OrderProductCountAggregateFragment = gql`
    fragment OrderProductCountAggregateFragment on OrderProductCountAggregate {
    	quantity
    	grossPrice
    	discountPrice
    	netPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`