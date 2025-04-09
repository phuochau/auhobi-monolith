import gql from 'graphql-tag'

export const VehicleLogBillMaxAggregateFragment = gql`
    fragment VehicleLogBillMaxAggregateFragment on VehicleLogBillMaxAggregate {
    	total
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`