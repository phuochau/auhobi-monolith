import gql from 'graphql-tag'

export const OrgTeamMembersMinAggregateFragment = gql`
    fragment OrgTeamMembersMinAggregateFragment on OrgTeamMembersMinAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`