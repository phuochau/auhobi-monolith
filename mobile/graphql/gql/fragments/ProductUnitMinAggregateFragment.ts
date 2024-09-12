import gql from 'graphql-tag'

export const ProductUnitMinAggregateFragment = gql`
    fragment ProductUnitMinAggregateFragment on ProductUnitMinAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`