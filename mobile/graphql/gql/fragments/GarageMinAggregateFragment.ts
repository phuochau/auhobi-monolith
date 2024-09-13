import gql from 'graphql-tag'

export const GarageMinAggregateFragment = gql`
    fragment GarageMinAggregateFragment on GarageMinAggregate {
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