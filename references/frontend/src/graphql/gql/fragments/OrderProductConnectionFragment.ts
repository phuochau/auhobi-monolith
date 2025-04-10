import gql from 'graphql-tag'

export const OrderProductConnectionFragment = gql`
    fragment OrderProductConnectionFragment on OrderProductConnection {
    	totalCount
    }
`