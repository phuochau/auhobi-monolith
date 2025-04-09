import gql from 'graphql-tag'

export const UserVehicleEdgeFragment = gql`
    fragment UserVehicleEdgeFragment on UserVehicleEdge {
    	cursor
    }
`