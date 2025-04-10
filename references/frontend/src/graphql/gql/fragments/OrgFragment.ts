import gql from 'graphql-tag'

export const OrgFragment = gql`
    fragment OrgFragment on Org {
    	type
    	name
    	details
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`