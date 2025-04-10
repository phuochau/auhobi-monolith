import gql from 'graphql-tag'

export const OrgShopsMaxAggregateFragment = gql`
    fragment OrgShopsMaxAggregateFragment on OrgShopsMaxAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`