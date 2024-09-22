import gql from 'graphql-tag'

export const OrgBranchFragment = gql`
    fragment OrgBranchFragment on OrgBranch {
    	name
    	phone_number
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`