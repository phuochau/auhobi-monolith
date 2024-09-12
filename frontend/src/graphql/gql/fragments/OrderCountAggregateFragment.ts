import gql from 'graphql-tag'

export const OrderCountAggregateFragment = gql`
    fragment OrderCountAggregateFragment on OrderCountAggregate {
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