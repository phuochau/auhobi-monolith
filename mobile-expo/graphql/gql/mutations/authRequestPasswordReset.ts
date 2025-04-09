import gql from 'graphql-tag'

export const AuthRequestPasswordResetMutation = gql`
    mutation AuthRequestPasswordReset($input: AuthRequestPasswordResetInput!) {
    	authRequestPasswordReset(input: $input)
    }
`