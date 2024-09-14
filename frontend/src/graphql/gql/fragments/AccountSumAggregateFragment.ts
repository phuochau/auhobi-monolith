import gql from 'graphql-tag'

export const AccountSumAggregateFragment = gql`
    fragment AccountSumAggregateFragment on AccountSumAggregate {
    	role
    }
`