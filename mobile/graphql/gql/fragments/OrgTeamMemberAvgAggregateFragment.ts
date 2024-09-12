import gql from 'graphql-tag'

export const OrgTeamMemberAvgAggregateFragment = gql`
    fragment OrgTeamMemberAvgAggregateFragment on OrgTeamMemberAvgAggregate {
    	role
    }
`