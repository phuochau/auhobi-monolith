import gql from 'graphql-tag'

export const ShopMemberAvgAggregateFragment = gql`
    fragment ShopMemberAvgAggregateFragment on ShopMemberAvgAggregate {
    	role
    }
`