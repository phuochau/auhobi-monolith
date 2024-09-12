import gql from 'graphql-tag'

export const BranchSaleChannelConnectionFragment = gql`
    fragment BranchSaleChannelConnectionFragment on BranchSaleChannelConnection {
    	totalCount
    }
`