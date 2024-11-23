import gql from 'graphql-tag'

export const AccountAggregateGroupByFragment = gql`
    fragment AccountAggregateGroupByFragment on AccountAggregateGroupBy {
    	authMethod
    	email
    	role
    	firstName
    	lastName
    	appleUserId
    	facebookUserId
    	googleUserId
    	id
    	emailVerified
    	isActivated
    	createdAt
    	updatedAt
    	deletedAt
    }
`