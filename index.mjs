import express from 'express';

import bindRoutes from './routes.mjs';

/* Initialise Express instance */
const app = express();

/* Expose the files stored in the public folder */
app.use(express.static('public'));

/* Middlewares */
app.use(express.urlencoded({ extended: false })); // handle req.body from form requests
app.use(express.json()); // handle json from axios post requests

// Bind route definitions to the Express application
bindRoutes(app);

// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
app.listen(PORT, ()=>{
  console.log(`bckend server is running on ${PORT}`)
});
