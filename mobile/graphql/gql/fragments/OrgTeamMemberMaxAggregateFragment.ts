import gql from 'graphql-tag'

export const OrgTeamMemberMaxAggregateFragment = gql`
    fragment OrgTeamMemberMaxAggregateFragment on OrgTeamMemberMaxAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`