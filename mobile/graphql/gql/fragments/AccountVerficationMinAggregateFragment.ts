import gql from 'graphql-tag'

export const AccountVerficationMinAggregateFragment = gql`
    fragment AccountVerficationMinAggregateFragment on AccountVerficationMinAggregate {
    	token
    	code
    	id
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`