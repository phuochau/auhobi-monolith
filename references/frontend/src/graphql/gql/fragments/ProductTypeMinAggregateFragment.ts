import gql from 'graphql-tag'

export const ProductTypeMinAggregateFragment = gql`
    fragment ProductTypeMinAggregateFragment on ProductTypeMinAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`