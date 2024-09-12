import gql from 'graphql-tag'

export const OrgTeamsMinAggregateFragment = gql`
    fragment OrgTeamsMinAggregateFragment on OrgTeamsMinAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`