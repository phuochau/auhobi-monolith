import gql from 'graphql-tag'

export const ProductPriceCountAggregateFragment = gql`
    fragment ProductPriceCountAggregateFragment on ProductPriceCountAggregate {
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`