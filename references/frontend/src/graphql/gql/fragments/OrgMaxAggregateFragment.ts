import gql from 'graphql-tag'

export const OrgMaxAggregateFragment = gql`
    fragment OrgMaxAggregateFragment on OrgMaxAggregate {
    	type
    	name
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`