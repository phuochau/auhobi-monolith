import gql from 'graphql-tag'

export const ProductOptionGroupOptionsSumAggregateFragment = gql`
    fragment ProductOptionGroupOptionsSumAggregateFragment on ProductOptionGroupOptionsSumAggregate {
    	diffPrice
    }
`