import gql from 'graphql-tag'

export const ServiceLogBillConnectionFragment = gql`
    fragment ServiceLogBillConnectionFragment on ServiceLogBillConnection {
    	totalCount
    }
`