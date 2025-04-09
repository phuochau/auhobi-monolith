import gql from 'graphql-tag'

export const AuthLoginByAppleMutation = gql`
    mutation AuthLoginByApple($input: AuthLoginSocialInput!) {
    	authLoginByApple(input: $input) {
    		account {
    			authMethods
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