import gql from 'graphql-tag'

export const OrgBranchMinAggregateFragment = gql`
    fragment OrgBranchMinAggregateFragment on OrgBranchMinAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`