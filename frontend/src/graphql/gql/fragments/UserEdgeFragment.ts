import gql from 'graphql-tag'

export const UserEdgeFragment = gql`
    fragment UserEdgeFragment on UserEdge {
    	cursor
    }
`