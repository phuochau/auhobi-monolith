import gql from 'graphql-tag'

export const ServiceLogBillMinAggregateFragment = gql`
    fragment ServiceLogBillMinAggregateFragment on ServiceLogBillMinAggregate {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`