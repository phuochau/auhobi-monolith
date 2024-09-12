import gql from 'graphql-tag'

export const AccountVerficationFragment = gql`
    fragment AccountVerficationFragment on AccountVerfication {
    	token
    	id
    	used
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`