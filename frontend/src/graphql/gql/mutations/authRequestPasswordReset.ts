import gql from 'graphql-tag'

export const AuthRequestPasswordResetMutation = gql`
    mutation AuthRequestPasswordReset($email: String!) {
    	authRequestPasswordReset(email: $email)
    }
`