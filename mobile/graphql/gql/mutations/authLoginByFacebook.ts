import gql from 'graphql-tag'

export const AuthLoginByFacebookMutation = gql`
    mutation AuthLoginByFacebook($input: AuthLoginSocialInput!) {
    	authLoginByFacebook(input: $input) {
    		account {
    			email
    			role
    			firstName
    			lastName
    			phoneNumber
    			id
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