import gql from 'graphql-tag'

export const ApiKeyConnectionFragment = gql`
    fragment ApiKeyConnectionFragment on ApiKeyConnection {
    	totalCount
    }
`