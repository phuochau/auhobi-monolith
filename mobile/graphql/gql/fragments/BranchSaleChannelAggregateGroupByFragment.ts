import gql from 'graphql-tag'

export const BranchSaleChannelAggregateGroupByFragment = gql`
    fragment BranchSaleChannelAggregateGroupByFragment on BranchSaleChannelAggregateGroupBy {
    	saleChannel
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`