import gql from 'graphql-tag'

export const OrgShopsCountAggregateFragment = gql`
    fragment OrgShopsCountAggregateFragment on OrgShopsCountAggregate {
    	name
    	details
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`