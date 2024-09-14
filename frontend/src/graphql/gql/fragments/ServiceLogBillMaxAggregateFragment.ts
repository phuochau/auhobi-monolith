import gql from 'graphql-tag'

export const ServiceLogBillMaxAggregateFragment = gql`
    fragment ServiceLogBillMaxAggregateFragment on ServiceLogBillMaxAggregate {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`