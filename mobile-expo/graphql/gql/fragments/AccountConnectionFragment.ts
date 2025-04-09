import gql from 'graphql-tag'

export const AccountConnectionFragment = gql`
    fragment AccountConnectionFragment on AccountConnection {
    	totalCount
    }
`