import gql from 'graphql-tag'

export const OrgShopsConnectionFragment = gql`
    fragment OrgShopsConnectionFragment on OrgShopsConnection {
    	totalCount
    }
`