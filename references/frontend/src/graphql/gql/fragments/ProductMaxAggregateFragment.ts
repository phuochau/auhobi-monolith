import gql from 'graphql-tag'

export const ProductMaxAggregateFragment = gql`
    fragment ProductMaxAggregateFragment on ProductMaxAggregate {
    	sku
    	name
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`