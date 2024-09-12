import gql from 'graphql-tag'

export const AuthResendVerificationWithEmailMutation = gql`
    mutation AuthResendVerificationWithEmail($email: String!) {
    	authResendVerificationWithEmail(email: $email)
    }
`