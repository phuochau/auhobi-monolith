import gql from 'graphql-tag'

export const OrgBranchesMaxAggregateFragment = gql`
    fragment OrgBranchesMaxAggregateFragment on OrgBranchesMaxAggregate {
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