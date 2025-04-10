import gql from 'graphql-tag'

export const ProductMinAggregateFragment = gql`
    fragment ProductMinAggregateFragment on ProductMinAggregate {
    	sku
    	name
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`