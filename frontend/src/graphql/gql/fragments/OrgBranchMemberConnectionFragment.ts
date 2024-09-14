import gql from 'graphql-tag'

export const OrgBranchMemberConnectionFragment = gql`
    fragment OrgBranchMemberConnectionFragment on OrgBranchMemberConnection {
    	totalCount
    }
`