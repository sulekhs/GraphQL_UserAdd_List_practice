import {GraphQLObjectType, GraphQLString, GraphQLBoolean} from 'graphql';


const UserType = new GraphQLObjectType({
    name:'user',
    fields: () => ({
        _id: { type:GraphQLString },
        username: { type: GraphQLString },
        email: { type:GraphQLString },
        password: { type:GraphQLString },
        gender: { type:GraphQLString },
        isAdmin: { type:GraphQLBoolean },
        status: { type:GraphQLString },
    })
});

export default UserType;