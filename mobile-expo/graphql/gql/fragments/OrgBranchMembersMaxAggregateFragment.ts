import gql from 'graphql-tag'

export const OrgBranchMembersMaxAggregateFragment = gql`
    fragment OrgBranchMembersMaxAggregateFragment on OrgBranchMembersMaxAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`