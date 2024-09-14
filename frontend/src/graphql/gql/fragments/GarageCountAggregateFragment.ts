import gql from 'graphql-tag'

export const GarageCountAggregateFragment = gql`
    fragment GarageCountAggregateFragment on GarageCountAggregate {
    	name
    	address
    	lat
    	lng
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`