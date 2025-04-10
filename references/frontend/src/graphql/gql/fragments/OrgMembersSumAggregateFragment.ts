import gql from 'graphql-tag'

export const OrgMembersSumAggregateFragment = gql`
    fragment OrgMembersSumAggregateFragment on OrgMembersSumAggregate {
    	role
    }
`