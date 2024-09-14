import gql from 'graphql-tag'

export const OrgBranchCountAggregateFragment = gql`
    fragment OrgBranchCountAggregateFragment on OrgBranchCountAggregate {
    	name
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`