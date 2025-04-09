import gql from 'graphql-tag'

export const AuthResendVerificationWithEmailMutation = gql`
    mutation AuthResendVerificationWithEmail($input: AuthResendVerificationWithEmailInput!) {
    	authResendVerificationWithEmail(input: $input)
    }
`