import gql from 'graphql-tag'

export const ProductTypeAggregateGroupByFragment = gql`
    fragment ProductTypeAggregateGroupByFragment on ProductTypeAggregateGroupBy {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`