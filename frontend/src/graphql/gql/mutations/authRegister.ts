import gql from 'graphql-tag'

export const AuthRegisterMutation = gql`
    mutation AuthRegister($email: String!, $password: String!, $firstName: String!, $lastName: String) {
    	authRegister(email: $email, password: $password, firstName: $firstName, lastName: $lastName)
    }
`