import gql from 'graphql-tag'

export const OrgTeamMemberEdgeFragment = gql`
    fragment OrgTeamMemberEdgeFragment on OrgTeamMemberEdge {
    	cursor
    }
`