import gql from 'graphql-tag'

export const GarageCountAggregateFragment = gql`
    fragment GarageCountAggregateFragment on GarageCountAggregate {
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