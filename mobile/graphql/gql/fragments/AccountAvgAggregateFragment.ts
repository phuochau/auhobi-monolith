import gql from 'graphql-tag'

export const AccountAvgAggregateFragment = gql`
    fragment AccountAvgAggregateFragment on AccountAvgAggregate {
    	authMethod
    	role
    }
`