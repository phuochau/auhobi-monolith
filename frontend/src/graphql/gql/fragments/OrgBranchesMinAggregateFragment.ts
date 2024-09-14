import gql from 'graphql-tag'

export const OrgBranchesMinAggregateFragment = gql`
    fragment OrgBranchesMinAggregateFragment on OrgBranchesMinAggregate {
    	name
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`