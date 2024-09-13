import gql from 'graphql-tag'

export const VehicleLogBillMinAggregateFragment = gql`
    fragment VehicleLogBillMinAggregateFragment on VehicleLogBillMinAggregate {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`