import gql from 'graphql-tag'

export const OrgShopsAggregateGroupByFragment = gql`
    fragment OrgShopsAggregateGroupByFragment on OrgShopsAggregateGroupBy {
    	name
    	details
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`