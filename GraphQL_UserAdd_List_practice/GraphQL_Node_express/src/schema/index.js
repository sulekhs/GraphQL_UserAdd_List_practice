import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { USER_Add, USER_DELETE, USER_UPDATE } from '../mutations/userMutation.js';
import { USER_LIST, USER_DETAILS } from '../queries/userQueries.js';


const RootQueryType = new GraphQLObjectType({
    name:'Query',
    description:'Root Query',
    fields: {
        userList: USER_LIST,
        userDetail: USER_DETAILS
    }
});

const RootMutationType = new GraphQLObjectType({
    name:'Mutation',
    description:'Root Mutation',
    fields: {
        createUser: USER_Add,
        updateUser: USER_UPDATE,
        deleteUser: USER_DELETE
    }
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

export default schema;