import gql from 'graphql-tag'

export const BranchSaleChannelCountAggregateFragment = gql`
    fragment BranchSaleChannelCountAggregateFragment on BranchSaleChannelCountAggregate {
    	saleChannel
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`