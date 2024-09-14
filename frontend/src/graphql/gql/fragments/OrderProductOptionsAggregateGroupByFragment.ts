import gql from 'graphql-tag'

export const OrderProductOptionsAggregateGroupByFragment = gql`
    fragment OrderProductOptionsAggregateGroupByFragment on OrderProductOptionsAggregateGroupBy {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`