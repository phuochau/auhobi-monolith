import gql from 'graphql-tag'

export const OrgBranchesConnectionFragment = gql`
    fragment OrgBranchesConnectionFragment on OrgBranchesConnection {
    	totalCount
    }
`