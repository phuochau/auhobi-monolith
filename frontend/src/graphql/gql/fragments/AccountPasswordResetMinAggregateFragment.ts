import gql from 'graphql-tag'

export const AccountPasswordResetMinAggregateFragment = gql`
    fragment AccountPasswordResetMinAggregateFragment on AccountPasswordResetMinAggregate {
    	token
    	id
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`