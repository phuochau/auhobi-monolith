import gql from 'graphql-tag'

export const ProductUnitCountAggregateFragment = gql`
    fragment ProductUnitCountAggregateFragment on ProductUnitCountAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`