import gql from 'graphql-tag'

export const OrgAggregateGroupByFragment = gql`
    fragment OrgAggregateGroupByFragment on OrgAggregateGroupBy {
    	type
    	name
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`