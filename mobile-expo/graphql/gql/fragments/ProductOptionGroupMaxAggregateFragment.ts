import gql from 'graphql-tag'

export const ProductOptionGroupMaxAggregateFragment = gql`
    fragment ProductOptionGroupMaxAggregateFragment on ProductOptionGroupMaxAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`