import gql from 'graphql-tag'

export const AuthResendVerificationMutation = gql`
    mutation AuthResendVerification($token: String!) {
    	authResendVerification(token: $token)
    }
`