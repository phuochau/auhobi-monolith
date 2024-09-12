import gql from 'graphql-tag'

export const ProductPriceMinAggregateFragment = gql`
    fragment ProductPriceMinAggregateFragment on ProductPriceMinAggregate {
    	price
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`