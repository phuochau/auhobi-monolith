import gql from 'graphql-tag'

export const OrgTeamCountAggregateFragment = gql`
    fragment OrgTeamCountAggregateFragment on OrgTeamCountAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`