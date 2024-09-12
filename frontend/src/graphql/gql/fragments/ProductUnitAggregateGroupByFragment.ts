import gql from 'graphql-tag'

export const ProductUnitAggregateGroupByFragment = gql`
    fragment ProductUnitAggregateGroupByFragment on ProductUnitAggregateGroupBy {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`