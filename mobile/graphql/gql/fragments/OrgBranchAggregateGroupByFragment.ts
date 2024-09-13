import gql from 'graphql-tag'

export const OrgBranchAggregateGroupByFragment = gql`
    fragment OrgBranchAggregateGroupByFragment on OrgBranchAggregateGroupBy {
    	name
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`