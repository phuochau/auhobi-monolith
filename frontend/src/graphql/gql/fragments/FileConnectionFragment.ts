import gql from 'graphql-tag'

export const FileConnectionFragment = gql`
    fragment FileConnectionFragment on FileConnection {
    	totalCount
    }
`