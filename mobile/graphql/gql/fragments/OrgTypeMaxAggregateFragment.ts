import gql from 'graphql-tag'

export const OrgTypeMaxAggregateFragment = gql`
    fragment OrgTypeMaxAggregateFragment on OrgTypeMaxAggregate {
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`