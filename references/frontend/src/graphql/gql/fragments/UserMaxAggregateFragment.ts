import gql from 'graphql-tag'

export const UserMaxAggregateFragment = gql`
    fragment UserMaxAggregateFragment on UserMaxAggregate {
    	phone_number
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`