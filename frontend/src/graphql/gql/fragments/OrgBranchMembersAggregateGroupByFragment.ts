import gql from 'graphql-tag'

export const OrgBranchMembersAggregateGroupByFragment = gql`
    fragment OrgBranchMembersAggregateGroupByFragment on OrgBranchMembersAggregateGroupBy {
    	role
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`