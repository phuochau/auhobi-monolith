import gql from 'graphql-tag'

export const FileAggregateGroupByFragment = gql`
    fragment FileAggregateGroupByFragment on FileAggregateGroupBy {
    	name
    	mimetype
    	refId
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`