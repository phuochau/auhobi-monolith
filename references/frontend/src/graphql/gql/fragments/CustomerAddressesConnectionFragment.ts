import gql from 'graphql-tag'

export const CustomerAddressesConnectionFragment = gql`
    fragment CustomerAddressesConnectionFragment on CustomerAddressesConnection {
    	totalCount
    }
`