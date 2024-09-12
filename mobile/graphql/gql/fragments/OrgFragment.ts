import gql from 'graphql-tag'

export const OrgFragment = gql`
    fragment OrgFragment on Org {
    	type
    	name
    	details
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`