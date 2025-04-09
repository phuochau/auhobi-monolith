import gql from 'graphql-tag'

export const OrderProductOptionsConnectionFragment = gql`
    fragment OrderProductOptionsConnectionFragment on OrderProductOptionsConnection {
    	totalCount
    }
`