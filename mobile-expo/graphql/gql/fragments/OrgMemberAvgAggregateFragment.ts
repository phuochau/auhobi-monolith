import gql from 'graphql-tag'

export const OrgMemberAvgAggregateFragment = gql`
    fragment OrgMemberAvgAggregateFragment on OrgMemberAvgAggregate {
    	role
    }
`