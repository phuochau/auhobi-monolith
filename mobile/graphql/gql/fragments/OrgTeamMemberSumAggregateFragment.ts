import gql from 'graphql-tag'

export const OrgTeamMemberSumAggregateFragment = gql`
    fragment OrgTeamMemberSumAggregateFragment on OrgTeamMemberSumAggregate {
    	role
    }
`