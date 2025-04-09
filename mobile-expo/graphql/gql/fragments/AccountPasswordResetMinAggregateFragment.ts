import gql from 'graphql-tag'

export const AccountPasswordResetMinAggregateFragment = gql`
    fragment AccountPasswordResetMinAggregateFragment on AccountPasswordResetMinAggregate {
    	token
    	code
    	id
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`