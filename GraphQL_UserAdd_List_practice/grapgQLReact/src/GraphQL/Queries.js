import { gql } from "@apollo/client/core";

export const GET_USER_LIST = gql`
    query getAllUsers {
        userList {
            _id
            username
            email
            gender
        }
    }
`