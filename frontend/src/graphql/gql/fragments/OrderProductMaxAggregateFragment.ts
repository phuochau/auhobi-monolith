import gql from 'graphql-tag'

export const OrderProductMaxAggregateFragment = gql`
    fragment OrderProductMaxAggregateFragment on OrderProductMaxAggregate {
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