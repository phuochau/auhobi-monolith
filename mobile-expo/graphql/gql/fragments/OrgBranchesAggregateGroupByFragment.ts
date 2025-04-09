import gql from 'graphql-tag'

export const OrgBranchesAggregateGroupByFragment = gql`
    fragment OrgBranchesAggregateGroupByFragment on OrgBranchesAggregateGroupBy {
    	name
    	phone_number
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`