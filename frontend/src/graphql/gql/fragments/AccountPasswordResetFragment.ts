import gql from 'graphql-tag'

export const AccountPasswordResetFragment = gql`
    fragment AccountPasswordResetFragment on AccountPasswordReset {
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