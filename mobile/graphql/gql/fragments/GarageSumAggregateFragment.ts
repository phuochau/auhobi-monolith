import gql from 'graphql-tag'

export const GarageSumAggregateFragment = gql`
    fragment GarageSumAggregateFragment on GarageSumAggregate {
    	lat
    	lng
    	id
    }
`