import gql from 'graphql-tag'

export const ServiceLogAggregateGroupByFragment = gql`
    fragment ServiceLogAggregateGroupByFragment on ServiceLogAggregateGroupBy {
    	description
    	date
    	type
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`