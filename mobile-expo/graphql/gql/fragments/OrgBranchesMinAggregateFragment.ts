import gql from 'graphql-tag'

export const OrgBranchesMinAggregateFragment = gql`
    fragment OrgBranchesMinAggregateFragment on OrgBranchesMinAggregate {
    	name
    	phone_number
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`