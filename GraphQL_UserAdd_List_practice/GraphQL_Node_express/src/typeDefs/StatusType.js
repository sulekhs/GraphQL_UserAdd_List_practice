import {GraphQLObjectType, GraphQLString, GraphQLBoolean} from 'graphql';


const StatusType = new GraphQLObjectType({
    name:'status',
    fields: () => ({
        success: { type: GraphQLBoolean },
        message: { type:GraphQLString },
        error: { type:GraphQLString },
    })
});

export default StatusType;