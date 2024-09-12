import gql from 'graphql-tag'

export const ProductUnitMaxAggregateFragment = gql`
    fragment ProductUnitMaxAggregateFragment on ProductUnitMaxAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`