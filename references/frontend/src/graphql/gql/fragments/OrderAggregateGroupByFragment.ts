import gql from 'graphql-tag'

export const OrderAggregateGroupByFragment = gql`
    fragment OrderAggregateGroupByFragment on OrderAggregateGroupBy {
    	refId
    	grossPrice
    	discountPrice
    	commissionPercent
    	commissionPrice
    	netPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`