import gql from 'graphql-tag'

export const OrgBranchMaxAggregateFragment = gql`
    fragment OrgBranchMaxAggregateFragment on OrgBranchMaxAggregate {
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