import gql from 'graphql-tag'

export const MediaConnectionFragment = gql`
    fragment MediaConnectionFragment on MediaConnection {
    	totalCount
    }
`