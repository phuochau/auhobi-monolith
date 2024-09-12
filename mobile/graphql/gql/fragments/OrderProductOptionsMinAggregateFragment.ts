import gql from 'graphql-tag'

export const OrderProductOptionsMinAggregateFragment = gql`
    fragment OrderProductOptionsMinAggregateFragment on OrderProductOptionsMinAggregate {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`