import gql from 'graphql-tag'

export const OrgTypeCountAggregateFragment = gql`
    fragment OrgTypeCountAggregateFragment on OrgTypeCountAggregate {
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`