import gql from 'graphql-tag'

export const OrgBranchMemberEdgeFragment = gql`
    fragment OrgBranchMemberEdgeFragment on OrgBranchMemberEdge {
    	cursor
    }
`