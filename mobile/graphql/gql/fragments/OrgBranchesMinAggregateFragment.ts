import gql from 'graphql-tag'

export const OrgBranchesMinAggregateFragment = gql`
    fragment OrgBranchesMinAggregateFragment on OrgBranchesMinAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`