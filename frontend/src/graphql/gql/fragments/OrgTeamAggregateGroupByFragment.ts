import gql from 'graphql-tag'

export const OrgTeamAggregateGroupByFragment = gql`
    fragment OrgTeamAggregateGroupByFragment on OrgTeamAggregateGroupBy {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`