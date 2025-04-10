import gql from 'graphql-tag'

export const OrgBranchMemberFragment = gql`
    fragment OrgBranchMemberFragment on OrgBranchMember {
    	role
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`