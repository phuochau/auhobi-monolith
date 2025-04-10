import gql from 'graphql-tag'

export const OrgMemberMinAggregateFragment = gql`
    fragment OrgMemberMinAggregateFragment on OrgMemberMinAggregate {
    	role
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`