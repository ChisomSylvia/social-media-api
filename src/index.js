import express from 'express';
const app = express();
import connectToMongodb from './configs/database.config.js';
import indexMiddleware from './middlewares/index.middleware.js';


indexMiddleware(app);

app.listen(3000, () => {
  connectToMongodb();
  console.log('App is currently running on port 3000');
})