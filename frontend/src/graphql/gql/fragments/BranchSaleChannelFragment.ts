import gql from 'graphql-tag'

export const BranchSaleChannelFragment = gql`
    fragment BranchSaleChannelFragment on BranchSaleChannel {
    	commission
    	details
    	saleChannel
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`