import gql from 'graphql-tag'

export const ServiceLogMinAggregateFragment = gql`
    fragment ServiceLogMinAggregateFragment on ServiceLogMinAggregate {
    	type
    	description
    	date
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`