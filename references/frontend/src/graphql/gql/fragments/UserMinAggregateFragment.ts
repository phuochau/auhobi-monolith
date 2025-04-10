import gql from 'graphql-tag'

export const UserMinAggregateFragment = gql`
    fragment UserMinAggregateFragment on UserMinAggregate {
    	phone_number
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`