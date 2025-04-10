import gql from 'graphql-tag'

export const OrgBranchFragment = gql`
    fragment OrgBranchFragment on OrgBranch {
    	name
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`