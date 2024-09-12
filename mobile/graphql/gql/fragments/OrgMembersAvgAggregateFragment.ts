import gql from 'graphql-tag'

export const OrgMembersAvgAggregateFragment = gql`
    fragment OrgMembersAvgAggregateFragment on OrgMembersAvgAggregate {
    	role
    }
`