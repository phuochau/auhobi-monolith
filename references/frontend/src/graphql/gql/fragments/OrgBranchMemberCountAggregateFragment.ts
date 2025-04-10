import gql from 'graphql-tag'

export const OrgBranchMemberCountAggregateFragment = gql`
    fragment OrgBranchMemberCountAggregateFragment on OrgBranchMemberCountAggregate {
    	role
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`