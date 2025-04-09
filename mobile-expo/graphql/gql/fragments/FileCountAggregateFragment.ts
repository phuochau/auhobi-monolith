import gql from 'graphql-tag'

export const FileCountAggregateFragment = gql`
    fragment FileCountAggregateFragment on FileCountAggregate {
    	name
    	mimetype
    	refId
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`