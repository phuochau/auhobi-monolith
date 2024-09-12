import gql from 'graphql-tag'

export const OrgBranchAggregateGroupByFragment = gql`
    fragment OrgBranchAggregateGroupByFragment on OrgBranchAggregateGroupBy {
    	name
    	details
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`