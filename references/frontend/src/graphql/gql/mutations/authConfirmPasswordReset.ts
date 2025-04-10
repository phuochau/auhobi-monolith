import gql from 'graphql-tag'

export const AuthConfirmPasswordResetMutation = gql`
    mutation AuthConfirmPasswordReset($token: String!, $password: String!) {
    	authConfirmPasswordReset(token: $token, password: $password)
    }
`