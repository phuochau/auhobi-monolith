import gql from 'graphql-tag'

export const AccountVerficationMaxAggregateFragment = gql`
    fragment AccountVerficationMaxAggregateFragment on AccountVerficationMaxAggregate {
    	token
    	code
    	id
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`