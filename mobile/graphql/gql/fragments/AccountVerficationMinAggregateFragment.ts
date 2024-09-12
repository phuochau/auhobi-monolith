import gql from 'graphql-tag'

export const AccountVerficationMinAggregateFragment = gql`
    fragment AccountVerficationMinAggregateFragment on AccountVerficationMinAggregate {
    	token
    	id
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`