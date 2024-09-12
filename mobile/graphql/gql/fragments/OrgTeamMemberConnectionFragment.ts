import gql from 'graphql-tag'

export const OrgTeamMemberConnectionFragment = gql`
    fragment OrgTeamMemberConnectionFragment on OrgTeamMemberConnection {
    	totalCount
    }
`