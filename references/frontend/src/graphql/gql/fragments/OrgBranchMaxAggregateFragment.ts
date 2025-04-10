import gql from 'graphql-tag'

export const OrgBranchMaxAggregateFragment = gql`
    fragment OrgBranchMaxAggregateFragment on OrgBranchMaxAggregate {
    	name
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`