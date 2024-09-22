import gql from 'graphql-tag'

export const ServiceLogAggregateGroupByFragment = gql`
    fragment ServiceLogAggregateGroupByFragment on ServiceLogAggregateGroupBy {
    	type
    	description
    	date
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`