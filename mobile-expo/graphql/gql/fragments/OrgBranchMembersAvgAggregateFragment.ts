import gql from 'graphql-tag'

export const OrgBranchMembersAvgAggregateFragment = gql`
    fragment OrgBranchMembersAvgAggregateFragment on OrgBranchMembersAvgAggregate {
    	role
    }
`