import gql from 'graphql-tag'

export const ServiceLogMaxAggregateFragment = gql`
    fragment ServiceLogMaxAggregateFragment on ServiceLogMaxAggregate {
    	description
    	date
    	type
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`