import gql from 'graphql-tag'

export const ServiceLogMinAggregateFragment = gql`
    fragment ServiceLogMinAggregateFragment on ServiceLogMinAggregate {
    	description
    	date
    	type
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`