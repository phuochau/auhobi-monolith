import gql from 'graphql-tag'

export const VehicleLogBillConnectionFragment = gql`
    fragment VehicleLogBillConnectionFragment on VehicleLogBillConnection {
    	totalCount
    }
`