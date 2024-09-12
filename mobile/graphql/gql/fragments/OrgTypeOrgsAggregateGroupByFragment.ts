import gql from 'graphql-tag'

export const OrgTypeOrgsAggregateGroupByFragment = gql`
    fragment OrgTypeOrgsAggregateGroupByFragment on OrgTypeOrgsAggregateGroupBy {
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`