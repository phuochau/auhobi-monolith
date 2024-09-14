import gql from 'graphql-tag'

export const UserVehicleConnectionFragment = gql`
    fragment UserVehicleConnectionFragment on UserVehicleConnection {
    	totalCount
    }
`