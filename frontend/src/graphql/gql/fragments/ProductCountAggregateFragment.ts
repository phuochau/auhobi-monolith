import gql from 'graphql-tag'

export const ProductCountAggregateFragment = gql`
    fragment ProductCountAggregateFragment on ProductCountAggregate {
    	sku
    	name
    	price
    	enabled
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`