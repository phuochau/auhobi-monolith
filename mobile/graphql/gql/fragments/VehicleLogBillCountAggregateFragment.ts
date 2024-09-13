import gql from 'graphql-tag'

export const VehicleLogBillCountAggregateFragment = gql`
    fragment VehicleLogBillCountAggregateFragment on VehicleLogBillCountAggregate {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`