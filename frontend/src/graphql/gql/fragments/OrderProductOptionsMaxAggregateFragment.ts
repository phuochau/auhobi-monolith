import gql from 'graphql-tag'

export const OrderProductOptionsMaxAggregateFragment = gql`
    fragment OrderProductOptionsMaxAggregateFragment on OrderProductOptionsMaxAggregate {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`