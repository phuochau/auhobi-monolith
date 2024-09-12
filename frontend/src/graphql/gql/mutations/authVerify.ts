import gql from 'graphql-tag'

export const AuthVerifyMutation = gql`
    mutation AuthVerify($token: String!) {
    	authVerify(token: $token)
    }
`