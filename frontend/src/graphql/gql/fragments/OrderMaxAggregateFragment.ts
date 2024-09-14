import gql from 'graphql-tag'

export const OrderMaxAggregateFragment = gql`
    fragment OrderMaxAggregateFragment on OrderMaxAggregate {
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