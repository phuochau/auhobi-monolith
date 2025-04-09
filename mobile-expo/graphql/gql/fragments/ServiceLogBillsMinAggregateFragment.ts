import gql from 'graphql-tag'

export const ServiceLogBillsMinAggregateFragment = gql`
    fragment ServiceLogBillsMinAggregateFragment on ServiceLogBillsMinAggregate {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`