import gql from 'graphql-tag'

export const FileFragment = gql`
    fragment FileFragment on File {
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