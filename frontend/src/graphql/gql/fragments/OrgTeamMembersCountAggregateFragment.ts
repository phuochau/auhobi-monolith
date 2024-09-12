import gql from 'graphql-tag'

export const OrgTeamMembersCountAggregateFragment = gql`
    fragment OrgTeamMembersCountAggregateFragment on OrgTeamMembersCountAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`