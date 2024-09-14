import gql from 'graphql-tag'

export const OrgBranchConnectionFragment = gql`
    fragment OrgBranchConnectionFragment on OrgBranchConnection {
    	totalCount
    }
`