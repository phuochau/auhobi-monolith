import gql from 'graphql-tag'

export const UserVehiclesConnectionFragment = gql`
    fragment UserVehiclesConnectionFragment on UserVehiclesConnection {
    	totalCount
    }
`