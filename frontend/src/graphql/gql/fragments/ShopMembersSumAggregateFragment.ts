import gql from 'graphql-tag'

export const ShopMembersSumAggregateFragment = gql`
    fragment ShopMembersSumAggregateFragment on ShopMembersSumAggregate {
    	role
    }
`