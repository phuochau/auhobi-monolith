import gql from 'graphql-tag'

export const ProductTypeCountAggregateFragment = gql`
    fragment ProductTypeCountAggregateFragment on ProductTypeCountAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`