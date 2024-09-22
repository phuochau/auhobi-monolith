import gql from 'graphql-tag'

export const OrgBranchMinAggregateFragment = gql`
    fragment OrgBranchMinAggregateFragment on OrgBranchMinAggregate {
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