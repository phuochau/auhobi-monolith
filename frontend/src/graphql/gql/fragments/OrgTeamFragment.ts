import gql from 'graphql-tag'

export const OrgTeamFragment = gql`
    fragment OrgTeamFragment on OrgTeam {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`