import gql from 'graphql-tag'

export const OrderProductMinAggregateFragment = gql`
    fragment OrderProductMinAggregateFragment on OrderProductMinAggregate {
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