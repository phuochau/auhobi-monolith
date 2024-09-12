import gql from 'graphql-tag'

export const MediaCountAggregateFragment = gql`
    fragment MediaCountAggregateFragment on MediaCountAggregate {
    	name
    	mimetype
    	refId
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`