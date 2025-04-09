import gql from 'graphql-tag'

export const ShopMemberSumAggregateFragment = gql`
    fragment ShopMemberSumAggregateFragment on ShopMemberSumAggregate {
    	role
    }
`