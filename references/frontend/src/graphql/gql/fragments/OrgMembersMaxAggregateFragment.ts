import gql from 'graphql-tag'

export const OrgMembersMaxAggregateFragment = gql`
    fragment OrgMembersMaxAggregateFragment on OrgMembersMaxAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`