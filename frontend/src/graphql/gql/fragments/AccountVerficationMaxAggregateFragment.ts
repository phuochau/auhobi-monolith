import gql from 'graphql-tag'

export const AccountVerficationMaxAggregateFragment = gql`
    fragment AccountVerficationMaxAggregateFragment on AccountVerficationMaxAggregate {
    	token
    	id
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`