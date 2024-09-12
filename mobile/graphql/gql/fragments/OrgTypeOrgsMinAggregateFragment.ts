import gql from 'graphql-tag'

export const OrgTypeOrgsMinAggregateFragment = gql`
    fragment OrgTypeOrgsMinAggregateFragment on OrgTypeOrgsMinAggregate {
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`