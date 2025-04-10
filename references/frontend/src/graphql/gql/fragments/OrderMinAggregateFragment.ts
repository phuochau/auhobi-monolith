import gql from 'graphql-tag'

export const OrderMinAggregateFragment = gql`
    fragment OrderMinAggregateFragment on OrderMinAggregate {
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