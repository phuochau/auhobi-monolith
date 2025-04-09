import gql from 'graphql-tag'

export const VehicleLogConnectionFragment = gql`
    fragment VehicleLogConnectionFragment on VehicleLogConnection {
    	totalCount
    }
`