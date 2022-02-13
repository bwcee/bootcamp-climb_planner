import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const { FRONTEND_URL } = process.env;

import bindRoutes from './routes.mjs';

/* Initialise Express instance */
const app = express();

/* Expose the files stored in the public folder */
app.use(express.static('public'));

/* Middlewares */
app.use(express.urlencoded({ extended: false })); // handle req.body from form requests
app.use(express.json()); // handle json from axios post requests
app.use(cors({
  credentials:true,
  origin: FRONTEND_URL
}));

// Bind route definitions to the Express application
bindRoutes(app);

// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
app.listen(PORT, ()=>{
  console.log(`bckend server is running on ${PORT}`)
});
