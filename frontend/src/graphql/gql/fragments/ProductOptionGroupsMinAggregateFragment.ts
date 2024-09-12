import gql from 'graphql-tag'

export const ProductOptionGroupsMinAggregateFragment = gql`
    fragment ProductOptionGroupsMinAggregateFragment on ProductOptionGroupsMinAggregate {
    	sku
    	name
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`