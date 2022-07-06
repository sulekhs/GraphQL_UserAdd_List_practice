import { GraphQLString } from "graphql";
import User from "../models/User.js";
import StatusType from "../typeDefs/StatusType.js";
import UserType from "../typeDefs/UserType.js";


const USER_Add = {
    type: UserType,
    description: 'Add User',
    args: {
        username:{ type:GraphQLString },
        email:{ type:GraphQLString },
        password:{ type:GraphQLString },
        gender:{ type:GraphQLString },
        status:{ type:GraphQLString }
    },
    resolve: async (parent, args) => {
        const newUser = await User.create({
            username: args.username,
            email: args.email,
            password: args.password,
            gender: args.gender,
            status:args.status
        });
        return newUser;
    }
}


const USER_UPDATE = {
    type: StatusType,
    description: 'Update User',
    args: {
        _id: { type:GraphQLString },
        username:{ type:GraphQLString },
        email:{ type:GraphQLString },
        password:{ type:GraphQLString },
        gender:{ type:GraphQLString },
        status:{ type:GraphQLString }
    },
    resolve: async (parent, args) => {
        console.log(args);
        const updateUser = await User.findByIdAndUpdate(
            args._id,
            { 
                $set: {
                    username: args.username,
                    email: args.email,
                    password: args.password,
                    gender: args.gender,
                    status: args.status
                }
            },
            {
                new: true
            }
        )
        return { success: true, message:"Updated Successfully", error: "" };
    }
}


const USER_DELETE = {
    type: StatusType,
    description: 'Delete User',
    args: {
        _id: { type:GraphQLString },
    },
    resolve: async (parent, args) => {
        await User.findByIdAndDelete(args._id);
        return { success: true, message:"Deleted Successfully", error: "" };
    }
}

export { USER_Add, USER_UPDATE, USER_DELETE };