import gql from 'graphql-tag'

export const OrgBranchCountAggregateFragment = gql`
    fragment OrgBranchCountAggregateFragment on OrgBranchCountAggregate {
    	name
    	details
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`