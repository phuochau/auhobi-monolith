import gql from 'graphql-tag'

export const OrderProductAggregateGroupByFragment = gql`
    fragment OrderProductAggregateGroupByFragment on OrderProductAggregateGroupBy {
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