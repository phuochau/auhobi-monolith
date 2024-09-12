import gql from 'graphql-tag'

export const ProductOptionGroupsMaxAggregateFragment = gql`
    fragment ProductOptionGroupsMaxAggregateFragment on ProductOptionGroupsMaxAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`