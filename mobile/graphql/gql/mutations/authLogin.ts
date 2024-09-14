import gql from 'graphql-tag'

export const AuthLoginMutation = gql`
    mutation AuthLogin($input: AuthLoginInput!) {
    	authLogin(input: $input) {
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
				user {
					phone_number
					avatar
					status
					id
					vehicles {
						nodes {
							name
							customModel
							picture
							status
							metadata
							id
						}
					}
				}
    		}
    		accessToken
    		refreshToken
    	}
    }
`