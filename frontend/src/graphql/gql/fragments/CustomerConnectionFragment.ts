import gql from 'graphql-tag'

export const CustomerConnectionFragment = gql`
    fragment CustomerConnectionFragment on CustomerConnection {
    	totalCount
    }
`