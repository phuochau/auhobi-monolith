import gql from 'graphql-tag'

export const AccountPasswordResetAggregateGroupByFragment = gql`
    fragment AccountPasswordResetAggregateGroupByFragment on AccountPasswordResetAggregateGroupBy {
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