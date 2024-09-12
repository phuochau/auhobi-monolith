import gql from 'graphql-tag'

export const OrgBranchMembersSumAggregateFragment = gql`
    fragment OrgBranchMembersSumAggregateFragment on OrgBranchMembersSumAggregate {
    	role
    }
`