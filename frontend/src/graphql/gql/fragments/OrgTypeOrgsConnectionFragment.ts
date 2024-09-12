import gql from 'graphql-tag'

export const OrgTypeOrgsConnectionFragment = gql`
    fragment OrgTypeOrgsConnectionFragment on OrgTypeOrgsConnection {
    	totalCount
    }
`