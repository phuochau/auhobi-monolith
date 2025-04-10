import gql from 'graphql-tag'

export const AuthLoginMutation = gql`
    mutation AuthLogin($email: String!, $password: String!) {
    	authLogin(email: $email, password: $password) {
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