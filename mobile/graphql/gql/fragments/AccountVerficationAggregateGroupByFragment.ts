import gql from 'graphql-tag'

export const AccountVerficationAggregateGroupByFragment = gql`
    fragment AccountVerficationAggregateGroupByFragment on AccountVerficationAggregateGroupBy {
    	token
    	id
    	used
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`