import gql from 'graphql-tag'

export const OrderConnectionFragment = gql`
    fragment OrderConnectionFragment on OrderConnection {
    	totalCount
    }
`