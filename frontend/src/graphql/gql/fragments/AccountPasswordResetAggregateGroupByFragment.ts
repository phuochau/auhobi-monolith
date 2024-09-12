import gql from 'graphql-tag'

export const AccountPasswordResetAggregateGroupByFragment = gql`
    fragment AccountPasswordResetAggregateGroupByFragment on AccountPasswordResetAggregateGroupBy {
    	token
    	id
    	used
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`