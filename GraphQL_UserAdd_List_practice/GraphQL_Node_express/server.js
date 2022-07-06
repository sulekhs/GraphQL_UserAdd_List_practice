import express from 'express';
import {graphqlHTTP }from 'express-graphql';
import dotenv from 'dotenv';
import connect from './src/utils/connect.js';
import logger from './src/utils/logger.js';
import schema from './src/schema/index.js';
import cors from 'cors'

const app = express();
app.use(express.json());

dotenv.config();

app.use(cors());
// const root = {
//     dbConfig: db
// }

// const context = async (req) => {
//     //console.log(req.headers);
//     const host = req.headers.host;
//     const token = "sssss";
//     return { host, token }
// }

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql:true,
}));
// app.use('/graphql', 
//     graphqlHTTP( async req => ({
//         schema: schema,
//         rootValue:root ,//redis memcache connection 
//         graphiql:true,
//         context: () => context(req) //to pass user authentication token or return data and needs async await
//     }))
// );


const PORT = process.env.PORT;

app.listen(PORT, async () => {
    logger.info(`Backend started at ${PORT}`);

    await connect();
});