import gql from 'graphql-tag'

export const MediaMinAggregateFragment = gql`
    fragment MediaMinAggregateFragment on MediaMinAggregate {
    	name
    	mimetype
    	refId
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`