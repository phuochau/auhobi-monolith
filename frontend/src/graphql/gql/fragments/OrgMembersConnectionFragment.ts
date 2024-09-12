import gql from 'graphql-tag'

export const OrgMembersConnectionFragment = gql`
    fragment OrgMembersConnectionFragment on OrgMembersConnection {
    	totalCount
    }
`