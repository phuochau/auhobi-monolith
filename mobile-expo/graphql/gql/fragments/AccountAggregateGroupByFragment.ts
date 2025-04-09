import gql from 'graphql-tag'

export const AccountAggregateGroupByFragment = gql`
    fragment AccountAggregateGroupByFragment on AccountAggregateGroupBy {
    	authMethods
    	email
    	role
    	firstName
    	lastName
    	phoneNumber
    	appleUserId
    	facebookUserId
    	googleUserId
    	id
    	isActivated
    	emailVerified
    	phoneVerified
    	createdAt
    	updatedAt
    	deletedAt
    }
`