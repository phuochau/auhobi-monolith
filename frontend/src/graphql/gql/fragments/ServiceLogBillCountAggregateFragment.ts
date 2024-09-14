import gql from 'graphql-tag'

export const ServiceLogBillCountAggregateFragment = gql`
    fragment ServiceLogBillCountAggregateFragment on ServiceLogBillCountAggregate {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`