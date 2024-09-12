import gql from 'graphql-tag'

export const OrgCountAggregateFragment = gql`
    fragment OrgCountAggregateFragment on OrgCountAggregate {
    	type
    	name
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`