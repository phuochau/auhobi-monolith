import gql from 'graphql-tag'

export const MeQuery = gql`
    query Me {
    	me {
    		email
    		role
    		firstName
    		lastName
    		id
    		createdAt
    		updatedAt
    		deletedAt
    		user {
    			phone_number
    			avatar
    			status
    			id
    			createdAt
    			updatedAt
    			deletedAt
    			vehicles {
    				nodes {
    					name
    					customModel
    					picture
    					status
    					metadata
    					id
    					createdAt
    					updatedAt
    					deletedAt
    				}
    			}
    		}
    	}
    }
`