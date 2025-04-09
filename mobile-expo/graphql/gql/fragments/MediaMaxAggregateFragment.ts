import gql from 'graphql-tag'

export const MediaMaxAggregateFragment = gql`
    fragment MediaMaxAggregateFragment on MediaMaxAggregate {
    	name
    	mimetype
    	refId
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`