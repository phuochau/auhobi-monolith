import gql from 'graphql-tag'

export const AccountVerficationCountAggregateFragment = gql`
    fragment AccountVerficationCountAggregateFragment on AccountVerficationCountAggregate {
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