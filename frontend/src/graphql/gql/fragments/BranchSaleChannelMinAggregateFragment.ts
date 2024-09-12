import gql from 'graphql-tag'

export const BranchSaleChannelMinAggregateFragment = gql`
    fragment BranchSaleChannelMinAggregateFragment on BranchSaleChannelMinAggregate {
    	saleChannel
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`