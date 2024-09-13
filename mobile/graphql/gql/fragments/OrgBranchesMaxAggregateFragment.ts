import gql from 'graphql-tag'

export const OrgBranchesMaxAggregateFragment = gql`
    fragment OrgBranchesMaxAggregateFragment on OrgBranchesMaxAggregate {
    	name
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`