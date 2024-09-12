import gql from 'graphql-tag'

export const OrgMinAggregateFragment = gql`
    fragment OrgMinAggregateFragment on OrgMinAggregate {
    	type
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`