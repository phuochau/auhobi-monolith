import gql from 'graphql-tag'

export const GarageMaxAggregateFragment = gql`
    fragment GarageMaxAggregateFragment on GarageMaxAggregate {
    	name
    	phone_number
    	gplace_id
    	lat
    	lng
    	status
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`