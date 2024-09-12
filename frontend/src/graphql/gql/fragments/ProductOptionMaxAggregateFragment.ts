import gql from 'graphql-tag'

export const ProductOptionMaxAggregateFragment = gql`
    fragment ProductOptionMaxAggregateFragment on ProductOptionMaxAggregate {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`