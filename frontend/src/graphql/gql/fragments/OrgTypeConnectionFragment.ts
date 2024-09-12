import gql from 'graphql-tag'

export const OrgTypeConnectionFragment = gql`
    fragment OrgTypeConnectionFragment on OrgTypeConnection {
    	totalCount
    }
`