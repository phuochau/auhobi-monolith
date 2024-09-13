import gql from 'graphql-tag'

export const GarageMaxAggregateFragment = gql`
    fragment GarageMaxAggregateFragment on GarageMaxAggregate {
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