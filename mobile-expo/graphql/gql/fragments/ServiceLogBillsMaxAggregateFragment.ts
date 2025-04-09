import gql from 'graphql-tag'

export const ServiceLogBillsMaxAggregateFragment = gql`
    fragment ServiceLogBillsMaxAggregateFragment on ServiceLogBillsMaxAggregate {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`