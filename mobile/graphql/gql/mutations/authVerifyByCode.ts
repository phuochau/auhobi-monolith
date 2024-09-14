import gql from 'graphql-tag'

export const AuthVerifyByCodeMutation = gql`
    mutation AuthVerifyByCode($input: AuthVerifyAccountByCodeInput!) {
    	authVerifyByCode(input: $input)
    }
`