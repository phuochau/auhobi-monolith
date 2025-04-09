import gql from 'graphql-tag'

export const ProductOptionGroupMinAggregateFragment = gql`
    fragment ProductOptionGroupMinAggregateFragment on ProductOptionGroupMinAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`