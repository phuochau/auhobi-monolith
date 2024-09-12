import gql from 'graphql-tag'

export const OrgTeamMinAggregateFragment = gql`
    fragment OrgTeamMinAggregateFragment on OrgTeamMinAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`