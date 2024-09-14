import gql from 'graphql-tag'

export const AuthConfirmPasswordResetByCodeMutation = gql`
    mutation AuthConfirmPasswordResetByCode($input: AuthConfirmPasswordResetByCodeInput!) {
    	authConfirmPasswordResetByCode(input: $input)
    }
`