import gql from 'graphql-tag'

export const ServiceLogBillFragment = gql`
    fragment ServiceLogBillFragment on ServiceLogBill {
    	total
    	media
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`