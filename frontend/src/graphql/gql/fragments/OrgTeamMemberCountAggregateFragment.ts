import gql from 'graphql-tag'

export const OrgTeamMemberCountAggregateFragment = gql`
    fragment OrgTeamMemberCountAggregateFragment on OrgTeamMemberCountAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`