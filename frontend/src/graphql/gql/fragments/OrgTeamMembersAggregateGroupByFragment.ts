import gql from 'graphql-tag'

export const OrgTeamMembersAggregateGroupByFragment = gql`
    fragment OrgTeamMembersAggregateGroupByFragment on OrgTeamMembersAggregateGroupBy {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`