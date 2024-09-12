import gql from 'graphql-tag'

export const MediaAggregateGroupByFragment = gql`
    fragment MediaAggregateGroupByFragment on MediaAggregateGroupBy {
    	name
    	mimetype
    	refId
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`