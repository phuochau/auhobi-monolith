import gql from 'graphql-tag'

export const ProductOptionCountAggregateFragment = gql`
    fragment ProductOptionCountAggregateFragment on ProductOptionCountAggregate {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`