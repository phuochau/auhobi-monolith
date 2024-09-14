import gql from 'graphql-tag'

export const OrgBranchMemberAvgAggregateFragment = gql`
    fragment OrgBranchMemberAvgAggregateFragment on OrgBranchMemberAvgAggregate {
    	role
    }
`