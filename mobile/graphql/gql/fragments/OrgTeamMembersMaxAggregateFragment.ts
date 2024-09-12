import gql from 'graphql-tag'

export const OrgTeamMembersMaxAggregateFragment = gql`
    fragment OrgTeamMembersMaxAggregateFragment on OrgTeamMembersMaxAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`