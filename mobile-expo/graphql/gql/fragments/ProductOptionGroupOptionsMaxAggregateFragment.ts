import gql from 'graphql-tag'

export const ProductOptionGroupOptionsMaxAggregateFragment = gql`
    fragment ProductOptionGroupOptionsMaxAggregateFragment on ProductOptionGroupOptionsMaxAggregate {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`