import gql from 'graphql-tag'

export const OrderProductOptionsCountAggregateFragment = gql`
    fragment OrderProductOptionsCountAggregateFragment on OrderProductOptionsCountAggregate {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`