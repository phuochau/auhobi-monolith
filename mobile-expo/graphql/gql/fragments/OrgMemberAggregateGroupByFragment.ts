import gql from 'graphql-tag'

export const OrgMemberAggregateGroupByFragment = gql`
    fragment OrgMemberAggregateGroupByFragment on OrgMemberAggregateGroupBy {
    	role
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`