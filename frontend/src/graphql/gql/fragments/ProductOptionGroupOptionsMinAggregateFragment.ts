import gql from 'graphql-tag'

export const ProductOptionGroupOptionsMinAggregateFragment = gql`
    fragment ProductOptionGroupOptionsMinAggregateFragment on ProductOptionGroupOptionsMinAggregate {
    	sku
    	name
    	diffPrice
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`