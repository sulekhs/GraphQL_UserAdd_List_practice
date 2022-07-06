import { gql } from "@apollo/client/core";

export const CREATE_USER = gql`
    mutation createUser($username:String!, $email:String!, $password:String, $gender:String!) {
        createUser(username:$username, email:$email, password:$password, gender:$gender) {
            username,
            email,
            password,
            gender,
        }
    }
`


export const UPDATE_USER = gql`
    mutation updateUser($userId:String! ,$username:String!, $email:String!, $password:String, $gender:String!) {
        updateUser(_id:$userId,username:$username, email:$email, password:$password, gender:$gender) {
            success,
            message,
            error,
        }
    }
`