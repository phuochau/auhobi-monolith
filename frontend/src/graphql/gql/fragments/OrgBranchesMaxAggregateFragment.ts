import gql from 'graphql-tag'

export const OrgBranchesMaxAggregateFragment = gql`
    fragment OrgBranchesMaxAggregateFragment on OrgBranchesMaxAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`