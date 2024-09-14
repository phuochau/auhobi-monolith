import gql from 'graphql-tag'

export const OrgBranchMemberSumAggregateFragment = gql`
    fragment OrgBranchMemberSumAggregateFragment on OrgBranchMemberSumAggregate {
    	role
    }
`