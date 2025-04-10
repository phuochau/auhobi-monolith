import gql from 'graphql-tag'

export const OrgMembersMinAggregateFragment = gql`
    fragment OrgMembersMinAggregateFragment on OrgMembersMinAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`