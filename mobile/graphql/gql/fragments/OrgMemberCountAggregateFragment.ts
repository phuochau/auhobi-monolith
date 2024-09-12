import gql from 'graphql-tag'

export const OrgMemberCountAggregateFragment = gql`
    fragment OrgMemberCountAggregateFragment on OrgMemberCountAggregate {
    	role
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`