import gql from 'graphql-tag'

export const OrgShopsMinAggregateFragment = gql`
    fragment OrgShopsMinAggregateFragment on OrgShopsMinAggregate {
    	name
    	details
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`