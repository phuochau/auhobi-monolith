import gql from 'graphql-tag'

export const OrgMemberEdgeFragment = gql`
    fragment OrgMemberEdgeFragment on OrgMemberEdge {
    	cursor
    }
`