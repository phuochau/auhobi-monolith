import gql from 'graphql-tag'

export const ServiceLogBillsConnectionFragment = gql`
    fragment ServiceLogBillsConnectionFragment on ServiceLogBillsConnection {
    	totalCount
    }
`