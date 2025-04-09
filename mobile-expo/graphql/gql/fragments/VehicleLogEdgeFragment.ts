import gql from 'graphql-tag'

export const VehicleLogEdgeFragment = gql`
    fragment VehicleLogEdgeFragment on VehicleLogEdge {
    	cursor
    }
`