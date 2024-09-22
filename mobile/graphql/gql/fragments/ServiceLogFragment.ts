import gql from 'graphql-tag'

export const ServiceLogFragment = gql`
    fragment ServiceLogFragment on ServiceLog {
    	type
    	description
    	date
    	mileage
    	media
    	customGarage
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`