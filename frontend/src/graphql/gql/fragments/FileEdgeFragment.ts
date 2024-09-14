import gql from 'graphql-tag'

export const FileEdgeFragment = gql`
    fragment FileEdgeFragment on FileEdge {
    	cursor
    }
`