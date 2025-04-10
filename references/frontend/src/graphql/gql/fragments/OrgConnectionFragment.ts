import gql from 'graphql-tag'

export const OrgConnectionFragment = gql`
    fragment OrgConnectionFragment on OrgConnection {
    	totalCount
    }
`