import gql from 'graphql-tag'

export const ProductTypeMaxAggregateFragment = gql`
    fragment ProductTypeMaxAggregateFragment on ProductTypeMaxAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`