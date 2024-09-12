import gql from 'graphql-tag'

export const OrgTypeOrgsCountAggregateFragment = gql`
    fragment OrgTypeOrgsCountAggregateFragment on OrgTypeOrgsCountAggregate {
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`