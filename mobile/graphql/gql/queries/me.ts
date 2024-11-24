import gql from 'graphql-tag'

export const MeQuery = gql`
    query Me {
    	me {
    		email
    		role
    		firstName
    		lastName
    		phoneNumber
    		id
    		createdAt
    		updatedAt
    		deletedAt
    		user {
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
    					model {
    						refId
    						name
    						startYear
    						endYear
    						drive
    						engineType
    						fuelType
    						maxPower
    						maxTorque
    						transmission
    						images
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
    }
`