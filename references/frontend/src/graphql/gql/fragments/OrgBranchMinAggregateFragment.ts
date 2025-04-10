import gql from 'graphql-tag'

export const OrgBranchMinAggregateFragment = gql`
    fragment OrgBranchMinAggregateFragment on OrgBranchMinAggregate {
    	name
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`