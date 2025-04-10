import gql from 'graphql-tag'

export const OrgMemberFragment = gql`
    fragment OrgMemberFragment on OrgMember {
    	role
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`