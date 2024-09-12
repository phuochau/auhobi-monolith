import gql from 'graphql-tag'

export const AuthRefreshTokenMutation = gql`
    mutation AuthRefreshToken($accountId: ID!, $refreshToken: String!) {
    	authRefreshToken(accountId: $accountId, refreshToken: $refreshToken) {
    		account {
    			email
    			role
    			firstName
    			lastName
    			id
    			emailVerified
    			createdAt
    			updatedAt
    			deletedAt
    		}
    		accessToken
    		refreshToken
    	}
    }
`