import gql from 'graphql-tag'

export const OrgBranchesCountAggregateFragment = gql`
    fragment OrgBranchesCountAggregateFragment on OrgBranchesCountAggregate {
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