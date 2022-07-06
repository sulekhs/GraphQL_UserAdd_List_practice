import mongoose from "mongoose";
//import config from 'config';
import logger from "./logger.js";

const connect = async () => {
    //const mongoUri = config.get<string>('mongoUri');

    try {
        const mongoUri = process.env.MONGO_URL
        await mongoose.connect(mongoUri);
        logger.info('Connceted to MongoDB')
    } catch (err) {
        logger.error("mongoDB cannot be connected!");
        process.exit(1);
    }
};

export default connect;
