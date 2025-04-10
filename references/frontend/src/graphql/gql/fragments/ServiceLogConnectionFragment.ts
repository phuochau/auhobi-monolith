import gql from 'graphql-tag'

export const ServiceLogConnectionFragment = gql`
    fragment ServiceLogConnectionFragment on ServiceLogConnection {
    	totalCount
    }
`