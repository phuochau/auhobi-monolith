import gql from 'graphql-tag'

export const OrgTeamMemberAggregateGroupByFragment = gql`
    fragment OrgTeamMemberAggregateGroupByFragment on OrgTeamMemberAggregateGroupBy {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`