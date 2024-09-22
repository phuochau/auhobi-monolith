import gql from 'graphql-tag'

export const GarageMinAggregateFragment = gql`
    fragment GarageMinAggregateFragment on GarageMinAggregate {
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