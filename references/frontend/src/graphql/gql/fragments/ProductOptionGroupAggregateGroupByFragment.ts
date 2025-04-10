import gql from 'graphql-tag'

export const ProductOptionGroupAggregateGroupByFragment = gql`
    fragment ProductOptionGroupAggregateGroupByFragment on ProductOptionGroupAggregateGroupBy {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`