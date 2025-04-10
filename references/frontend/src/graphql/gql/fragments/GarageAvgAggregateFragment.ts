import gql from 'graphql-tag'

export const GarageAvgAggregateFragment = gql`
    fragment GarageAvgAggregateFragment on GarageAvgAggregate {
    	lat
    	lng
    	id
    }
`