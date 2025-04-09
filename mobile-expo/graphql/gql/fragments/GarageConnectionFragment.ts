import gql from 'graphql-tag'

export const GarageConnectionFragment = gql`
    fragment GarageConnectionFragment on GarageConnection {
    	totalCount
    }
`