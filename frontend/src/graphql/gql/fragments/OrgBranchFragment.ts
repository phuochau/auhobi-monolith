import gql from 'graphql-tag'

export const OrgBranchFragment = gql`
    fragment OrgBranchFragment on OrgBranch {
    	name
    	details
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`