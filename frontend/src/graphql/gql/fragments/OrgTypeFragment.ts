import gql from 'graphql-tag'

export const OrgTypeFragment = gql`
    fragment OrgTypeFragment on OrgType {
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`