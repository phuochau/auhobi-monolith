import gql from 'graphql-tag'

export const ServiceLogMaxAggregateFragment = gql`
    fragment ServiceLogMaxAggregateFragment on ServiceLogMaxAggregate {
    	type
    	description
    	date
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`