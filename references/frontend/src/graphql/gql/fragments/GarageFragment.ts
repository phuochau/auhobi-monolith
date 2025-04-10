import gql from 'graphql-tag'

export const GarageFragment = gql`
    fragment GarageFragment on Garage {
    	name
    	description
    	address
    	lat
    	lng
    	logo
    	media
    	status
    	metadata
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`