import gql from 'graphql-tag'

export const AccountPasswordResetMaxAggregateFragment = gql`
    fragment AccountPasswordResetMaxAggregateFragment on AccountPasswordResetMaxAggregate {
    	token
    	code
    	id
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`