import gql from 'graphql-tag'

export const OrgTeamsMaxAggregateFragment = gql`
    fragment OrgTeamsMaxAggregateFragment on OrgTeamsMaxAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`