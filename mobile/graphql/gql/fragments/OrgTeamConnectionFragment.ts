import gql from 'graphql-tag'

export const OrgTeamConnectionFragment = gql`
    fragment OrgTeamConnectionFragment on OrgTeamConnection {
    	totalCount
    }
`