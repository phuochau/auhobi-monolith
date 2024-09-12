import gql from 'graphql-tag'

export const BranchSaleChannelMaxAggregateFragment = gql`
    fragment BranchSaleChannelMaxAggregateFragment on BranchSaleChannelMaxAggregate {
    	saleChannel
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`