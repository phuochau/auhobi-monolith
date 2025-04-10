import gql from 'graphql-tag'

export const OrgMembersCountAggregateFragment = gql`
    fragment OrgMembersCountAggregateFragment on OrgMembersCountAggregate {
    	role
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`