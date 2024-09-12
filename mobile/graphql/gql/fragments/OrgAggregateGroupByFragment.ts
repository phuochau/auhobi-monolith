import gql from 'graphql-tag'

export const OrgAggregateGroupByFragment = gql`
    fragment OrgAggregateGroupByFragment on OrgAggregateGroupBy {
    	type
    	name
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`