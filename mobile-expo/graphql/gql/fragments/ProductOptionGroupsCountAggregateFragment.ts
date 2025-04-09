import gql from 'graphql-tag'

export const ProductOptionGroupsCountAggregateFragment = gql`
    fragment ProductOptionGroupsCountAggregateFragment on ProductOptionGroupsCountAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`