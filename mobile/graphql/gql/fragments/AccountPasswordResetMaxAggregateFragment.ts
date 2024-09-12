import gql from 'graphql-tag'

export const AccountPasswordResetMaxAggregateFragment = gql`
    fragment AccountPasswordResetMaxAggregateFragment on AccountPasswordResetMaxAggregate {
    	token
    	id
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`