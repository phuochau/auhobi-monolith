import gql from 'graphql-tag'

export const AccountVerficationConnectionFragment = gql`
    fragment AccountVerficationConnectionFragment on AccountVerficationConnection {
    	totalCount
    }
`