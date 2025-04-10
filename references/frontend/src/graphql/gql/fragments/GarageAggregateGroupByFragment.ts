import gql from 'graphql-tag'

export const GarageAggregateGroupByFragment = gql`
    fragment GarageAggregateGroupByFragment on GarageAggregateGroupBy {
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