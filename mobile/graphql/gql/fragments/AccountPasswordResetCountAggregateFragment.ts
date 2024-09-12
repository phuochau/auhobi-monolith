import gql from 'graphql-tag'

export const AccountPasswordResetCountAggregateFragment = gql`
    fragment AccountPasswordResetCountAggregateFragment on AccountPasswordResetCountAggregate {
    	token
    	id
    	used
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`