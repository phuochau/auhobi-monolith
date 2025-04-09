import gql from 'graphql-tag'

export const ShopMembersAvgAggregateFragment = gql`
    fragment ShopMembersAvgAggregateFragment on ShopMembersAvgAggregate {
    	role
    }
`