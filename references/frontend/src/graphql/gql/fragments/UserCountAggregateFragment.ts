import gql from 'graphql-tag'

export const UserCountAggregateFragment = gql`
    fragment UserCountAggregateFragment on UserCountAggregate {
    	phone_number
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`