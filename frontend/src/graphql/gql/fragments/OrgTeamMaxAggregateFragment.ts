import gql from 'graphql-tag'

export const OrgTeamMaxAggregateFragment = gql`
    fragment OrgTeamMaxAggregateFragment on OrgTeamMaxAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`