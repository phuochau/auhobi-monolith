import gql from 'graphql-tag'

export const AuthLoginMutation = gql`
    mutation AuthLogin($input: AuthLoginInput!) {
    	authLogin(input: $input) {
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