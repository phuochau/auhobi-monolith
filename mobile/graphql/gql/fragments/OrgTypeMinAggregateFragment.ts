import gql from 'graphql-tag'

export const OrgTypeMinAggregateFragment = gql`
    fragment OrgTypeMinAggregateFragment on OrgTypeMinAggregate {
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`