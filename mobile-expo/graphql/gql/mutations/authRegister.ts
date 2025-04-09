import gql from 'graphql-tag'

export const AuthRegisterMutation = gql`
    mutation AuthRegister($input: AuthRegisterInput!) {
    	authRegister(input: $input)
    }
`