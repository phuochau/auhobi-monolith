import gql from 'graphql-tag'

export const CreateOneOrgMutation = gql`
    mutation CreateOneOrg($input: CreateOneOrgInput!) {
    	createOneOrg(input: $input) {
    		name
    		details
    		id
    		createdAt
    		updatedAt
    		deletedAt
    	}
    }
`