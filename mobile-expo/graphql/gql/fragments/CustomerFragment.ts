import gql from 'graphql-tag'

export const CustomerFragment = gql`
    fragment CustomerFragment on Customer {
    	phone
    	email
    	firstName
    	lastName
    	gender
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`