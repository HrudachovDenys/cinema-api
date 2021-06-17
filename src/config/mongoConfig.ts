interface MongoConfig {
  mongoUri: string
}
  
export const mongoConfig: MongoConfig = {
  mongoUri: process.env.MONGO_URI,
};