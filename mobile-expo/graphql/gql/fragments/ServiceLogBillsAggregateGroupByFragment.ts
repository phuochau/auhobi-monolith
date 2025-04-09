import gql from 'graphql-tag'

export const ServiceLogBillsAggregateGroupByFragment = gql`
    fragment ServiceLogBillsAggregateGroupByFragment on ServiceLogBillsAggregateGroupBy {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`