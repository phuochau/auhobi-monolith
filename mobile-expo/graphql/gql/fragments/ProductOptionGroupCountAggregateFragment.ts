import gql from 'graphql-tag'

export const ProductOptionGroupCountAggregateFragment = gql`
    fragment ProductOptionGroupCountAggregateFragment on ProductOptionGroupCountAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`