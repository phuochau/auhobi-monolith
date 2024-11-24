import gql from 'graphql-tag'

export const UserMinAggregateFragment = gql`
    fragment UserMinAggregateFragment on UserMinAggregate {
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`