import gql from 'graphql-tag'

export const FileMinAggregateFragment = gql`
    fragment FileMinAggregateFragment on FileMinAggregate {
    	name
    	mimetype
    	refId
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`