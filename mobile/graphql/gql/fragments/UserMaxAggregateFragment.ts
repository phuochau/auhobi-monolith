import gql from 'graphql-tag'

export const UserMaxAggregateFragment = gql`
    fragment UserMaxAggregateFragment on UserMaxAggregate {
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`