import gql from 'graphql-tag'

export const OrgBranchMembersCountAggregateFragment = gql`
    fragment OrgBranchMembersCountAggregateFragment on OrgBranchMembersCountAggregate {
    	role
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`