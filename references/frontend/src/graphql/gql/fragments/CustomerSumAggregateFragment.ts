import gql from 'graphql-tag'

export const CustomerSumAggregateFragment = gql`
    fragment CustomerSumAggregateFragment on CustomerSumAggregate {
    	gender
    }
`