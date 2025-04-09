import gql from 'graphql-tag'

export const ServiceLogBillsCountAggregateFragment = gql`
    fragment ServiceLogBillsCountAggregateFragment on ServiceLogBillsCountAggregate {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`