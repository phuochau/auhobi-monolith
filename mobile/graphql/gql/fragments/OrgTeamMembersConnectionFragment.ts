import gql from 'graphql-tag'

export const OrgTeamMembersConnectionFragment = gql`
    fragment OrgTeamMembersConnectionFragment on OrgTeamMembersConnection {
    	totalCount
    }
`