import gql from 'graphql-tag'

export const OrgTypeOrgsMaxAggregateFragment = gql`
    fragment OrgTypeOrgsMaxAggregateFragment on OrgTypeOrgsMaxAggregate {
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`