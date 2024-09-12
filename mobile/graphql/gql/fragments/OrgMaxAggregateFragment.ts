import gql from 'graphql-tag'

export const OrgMaxAggregateFragment = gql`
    fragment OrgMaxAggregateFragment on OrgMaxAggregate {
    	type
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`