import gql from 'graphql-tag'

export const ApiKeyFragment = gql`
    fragment ApiKeyFragment on ApiKey {
    	name
    	key
    	secret
    	id
    	expired
    	expiredAt
    	createdAt
    	updatedAt
    	deletedAt
    }
`