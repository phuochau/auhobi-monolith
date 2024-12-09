import gql from 'graphql-tag'

export const AuthLoginByGoogleMutation = gql`
    mutation AuthLoginByGoogle($input: AuthLoginSocialInput!) {
    	authLoginByGoogle(input: $input) {
    		account {
    			email
    			role
    			firstName
    			lastName
    			phoneNumber
    			appleUserId
    			facebookUserId
    			googleUserId
    			id
    			isActivated
    			emailVerified
    			phoneVerified
    			createdAt
    			updatedAt
    			deletedAt
    			user {
    				avatar
    				status
    				id
    				createdAt
    				updatedAt
    				deletedAt
    			}
    		}
    		accessToken
    		refreshToken
    	}
    }
`