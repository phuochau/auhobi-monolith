import gql from 'graphql-tag'

export const ServiceLogFragment = gql`
    fragment ServiceLogFragment on ServiceLog {
    	type
    	description
    	date
    	mileage
    	links
    	media
    	customGarage
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`