import gql from 'graphql-tag'

export const ProductOptionMinAggregateFragment = gql`
    fragment ProductOptionMinAggregateFragment on ProductOptionMinAggregate {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`