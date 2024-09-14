import gql from 'graphql-tag'

export const OrgBranchMemberAggregateGroupByFragment = gql`
    fragment OrgBranchMemberAggregateGroupByFragment on OrgBranchMemberAggregateGroupBy {
    	role
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`