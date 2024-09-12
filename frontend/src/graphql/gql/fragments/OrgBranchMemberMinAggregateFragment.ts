import gql from 'graphql-tag'

export const OrgBranchMemberMinAggregateFragment = gql`
    fragment OrgBranchMemberMinAggregateFragment on OrgBranchMemberMinAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`