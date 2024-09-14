import gql from 'graphql-tag'

export const OrgMemberSumAggregateFragment = gql`
    fragment OrgMemberSumAggregateFragment on OrgMemberSumAggregate {
    	role
    }
`