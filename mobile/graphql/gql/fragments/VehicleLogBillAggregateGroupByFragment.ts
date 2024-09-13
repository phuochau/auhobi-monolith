import gql from 'graphql-tag'

export const VehicleLogBillAggregateGroupByFragment = gql`
    fragment VehicleLogBillAggregateGroupByFragment on VehicleLogBillAggregateGroupBy {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`