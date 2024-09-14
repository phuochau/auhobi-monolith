import gql from 'graphql-tag'

export const OrgBranchesCountAggregateFragment = gql`
    fragment OrgBranchesCountAggregateFragment on OrgBranchesCountAggregate {
    	name
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`