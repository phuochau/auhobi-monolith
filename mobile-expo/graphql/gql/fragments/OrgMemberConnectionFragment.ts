import gql from 'graphql-tag'

export const OrgMemberConnectionFragment = gql`
    fragment OrgMemberConnectionFragment on OrgMemberConnection {
    	totalCount
    }
`