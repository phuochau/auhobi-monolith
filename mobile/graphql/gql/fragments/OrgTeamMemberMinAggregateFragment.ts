import gql from 'graphql-tag'

export const OrgTeamMemberMinAggregateFragment = gql`
    fragment OrgTeamMemberMinAggregateFragment on OrgTeamMemberMinAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`