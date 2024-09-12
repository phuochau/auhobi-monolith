import gql from 'graphql-tag'

export const ProductPriceMaxAggregateFragment = gql`
    fragment ProductPriceMaxAggregateFragment on ProductPriceMaxAggregate {
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`