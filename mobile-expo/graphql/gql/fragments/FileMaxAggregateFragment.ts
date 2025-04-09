import gql from 'graphql-tag'

export const FileMaxAggregateFragment = gql`
    fragment FileMaxAggregateFragment on FileMaxAggregate {
    	name
    	mimetype
    	refId
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`