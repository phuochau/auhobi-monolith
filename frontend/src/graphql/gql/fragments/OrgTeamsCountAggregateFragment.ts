import gql from 'graphql-tag'

export const OrgTeamsCountAggregateFragment = gql`
    fragment OrgTeamsCountAggregateFragment on OrgTeamsCountAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`