import gql from 'graphql-tag'

export const ProductOptionGroupOptionsCountAggregateFragment = gql`
    fragment ProductOptionGroupOptionsCountAggregateFragment on ProductOptionGroupOptionsCountAggregate {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`