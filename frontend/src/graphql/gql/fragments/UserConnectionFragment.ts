import gql from 'graphql-tag'

export const UserConnectionFragment = gql`
    fragment UserConnectionFragment on UserConnection {
    	totalCount
    }
`