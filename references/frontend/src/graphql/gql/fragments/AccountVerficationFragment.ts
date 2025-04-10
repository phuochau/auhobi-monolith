import gql from 'graphql-tag'

export const AccountVerficationFragment = gql`
    fragment AccountVerficationFragment on AccountVerfication {
    	token
    	code
    	id
    	used
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`