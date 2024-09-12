import gql from 'graphql-tag'

export const ProductPriceAggregateGroupByFragment = gql`
    fragment ProductPriceAggregateGroupByFragment on ProductPriceAggregateGroupBy {
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`