import gql from 'graphql-tag'

export const OrgBranchesCountAggregateFragment = gql`
    fragment OrgBranchesCountAggregateFragment on OrgBranchesCountAggregate {
    	name
    	details
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`