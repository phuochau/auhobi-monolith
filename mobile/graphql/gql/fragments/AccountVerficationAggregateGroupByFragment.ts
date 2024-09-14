import gql from 'graphql-tag'

export const AccountVerficationAggregateGroupByFragment = gql`
    fragment AccountVerficationAggregateGroupByFragment on AccountVerficationAggregateGroupBy {
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