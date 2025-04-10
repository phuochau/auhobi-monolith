import gql from 'graphql-tag'

export const AccountPasswordResetCountAggregateFragment = gql`
    fragment AccountPasswordResetCountAggregateFragment on AccountPasswordResetCountAggregate {
    	token
    	code
    	id
    	used
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`