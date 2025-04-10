import gql from 'graphql-tag'

export const OrgMemberMaxAggregateFragment = gql`
    fragment OrgMemberMaxAggregateFragment on OrgMemberMaxAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`