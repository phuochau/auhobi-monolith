import gql from 'graphql-tag'

export const OrgBranchMembersMinAggregateFragment = gql`
    fragment OrgBranchMembersMinAggregateFragment on OrgBranchMembersMinAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`