import gql from 'graphql-tag'

export const OrgTypeAggregateGroupByFragment = gql`
    fragment OrgTypeAggregateGroupByFragment on OrgTypeAggregateGroupBy {
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`