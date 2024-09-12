import gql from 'graphql-tag'

export const OrgTeamMembersAvgAggregateFragment = gql`
    fragment OrgTeamMembersAvgAggregateFragment on OrgTeamMembersAvgAggregate {
    	role
    }
`