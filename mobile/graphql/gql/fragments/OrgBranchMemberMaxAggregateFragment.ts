import gql from 'graphql-tag'

export const OrgBranchMemberMaxAggregateFragment = gql`
    fragment OrgBranchMemberMaxAggregateFragment on OrgBranchMemberMaxAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`