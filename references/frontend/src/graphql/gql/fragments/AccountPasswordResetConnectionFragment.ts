import gql from 'graphql-tag'

export const AccountPasswordResetConnectionFragment = gql`
    fragment AccountPasswordResetConnectionFragment on AccountPasswordResetConnection {
    	totalCount
    }
`