import gql from 'graphql-tag'

export const ProductOptionGroupsAggregateGroupByFragment = gql`
    fragment ProductOptionGroupsAggregateGroupByFragment on ProductOptionGroupsAggregateGroupBy {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`