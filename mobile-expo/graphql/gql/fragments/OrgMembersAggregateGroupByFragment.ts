import gql from 'graphql-tag'

export const OrgMembersAggregateGroupByFragment = gql`
    fragment OrgMembersAggregateGroupByFragment on OrgMembersAggregateGroupBy {
    	role
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`