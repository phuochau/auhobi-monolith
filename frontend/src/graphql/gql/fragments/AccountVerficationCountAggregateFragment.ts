import gql from 'graphql-tag'

export const AccountVerficationCountAggregateFragment = gql`
    fragment AccountVerficationCountAggregateFragment on AccountVerficationCountAggregate {
    	token
    	id
    	used
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`