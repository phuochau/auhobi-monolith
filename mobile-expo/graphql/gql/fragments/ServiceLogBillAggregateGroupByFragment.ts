import gql from 'graphql-tag'

export const ServiceLogBillAggregateGroupByFragment = gql`
    fragment ServiceLogBillAggregateGroupByFragment on ServiceLogBillAggregateGroupBy {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`