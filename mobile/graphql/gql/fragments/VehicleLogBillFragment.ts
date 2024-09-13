import gql from 'graphql-tag'

export const VehicleLogBillFragment = gql`
    fragment VehicleLogBillFragment on VehicleLogBill {
    	total
    	media
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`