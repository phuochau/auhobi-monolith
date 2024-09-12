import gql from 'graphql-tag'

export const OrgBranchMembersConnectionFragment = gql`
    fragment OrgBranchMembersConnectionFragment on OrgBranchMembersConnection {
    	totalCount
    }
`