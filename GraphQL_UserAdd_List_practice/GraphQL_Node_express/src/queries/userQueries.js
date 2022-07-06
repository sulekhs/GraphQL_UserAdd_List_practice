import { GraphQLList, GraphQLString } from "graphql";
import User from "../models/User.js";
import UserType from "../typeDefs/UserType.js";


const USER_LIST = {
    type: new GraphQLList(UserType),
    description: 'List of Users',
    resolve: async (parent, args, ) => {
        //const myData = await context();//This returns Promise so needs async await to resolve
        //console.log(myData); //
        //const { dbConfig } = parent
        const users = await User.find();   // to find all Users
        return users;
    }
}

const USER_DETAILS = {
    type: UserType,
    description: 'List of Users',
    args: {
        id: { type: GraphQLString }
    },
    resolve: async (parent, args, ) => {
        console.log(args)
        const users = await User.findOne(args); 
        return users;
    }
}


export { USER_LIST, USER_DETAILS };