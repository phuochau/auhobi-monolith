import gql from 'graphql-tag'

export const ProductOptionGroupOptionsAggregateGroupByFragment = gql`
    fragment ProductOptionGroupOptionsAggregateGroupByFragment on ProductOptionGroupOptionsAggregateGroupBy {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`