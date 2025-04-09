import gql from 'graphql-tag'

export const MediaFragment = gql`
    fragment MediaFragment on Media {
    	name
    	mimetype
    	refId
    	url
    	secureUrl
    	id
    	createdAt
    	updatedAt
    	deletedAt
    }
`