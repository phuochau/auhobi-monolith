import gql from 'graphql-tag'

export const OrgMinAggregateFragment = gql`
    fragment OrgMinAggregateFragment on OrgMinAggregate {
    	type
    	name
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`