import gql from 'graphql-tag'

export const OrgTeamMemberFragment = gql`
    fragment OrgTeamMemberFragment on OrgTeamMember {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`