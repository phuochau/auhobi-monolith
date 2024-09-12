import gql from 'graphql-tag'

export const OrgTeamsConnectionFragment = gql`
    fragment OrgTeamsConnectionFragment on OrgTeamsConnection {
    	totalCount
    }
`