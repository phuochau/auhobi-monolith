import gql from 'graphql-tag'

export const OrgTeamsAggregateGroupByFragment = gql`
    fragment OrgTeamsAggregateGroupByFragment on OrgTeamsAggregateGroupBy {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`