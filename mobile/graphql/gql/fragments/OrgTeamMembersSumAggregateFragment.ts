import gql from 'graphql-tag'

export const OrgTeamMembersSumAggregateFragment = gql`
    fragment OrgTeamMembersSumAggregateFragment on OrgTeamMembersSumAggregate {
    	role
    }
`