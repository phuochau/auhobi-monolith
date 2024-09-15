import gql from 'graphql-tag'

export const ServiceLogFragment = gql`
    fragment ServiceLogFragment on ServiceLog {
    	description
    	date
    	mileage
    	type
    	media
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`