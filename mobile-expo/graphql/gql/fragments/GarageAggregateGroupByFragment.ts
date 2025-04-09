import gql from 'graphql-tag'

export const GarageAggregateGroupByFragment = gql`
    fragment GarageAggregateGroupByFragment on GarageAggregateGroupBy {
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