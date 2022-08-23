const path = require('path');
// connect GraphQL schema to the express server by adding an Apollo Server to our exsisting service layer
const express = require('express');
// Apollo server is a library we use with the esisting express server
// require the dependency and import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');

// Import the two parts of a GraphQL schema:
// 1) typeDefs: defines the schema
// 2) resolvers: functions that are responsible for populating data for a single field in the schema
const { typeDefs, resolvers } = require('./schemas');

// require connection to our database
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
// Create new instance of ApolloServer class with typeDefs and resolvers(the GraphQL schema) as parameters
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
// basic middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if in production, serve client/build as static assets
if (process.env.NODE.ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// redirect all GET reqs in production to be handled by react router
// forces react router to load instead of servingg 404 error
app.get('/*', function (req, res) {
  res.sendFile(
    path.join(__dirname, '../client/build/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

// Create new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // Method that updates Our Express.js server to use Apollo server features
  server.applyMiddleware({ app });

  // Start the database connection
  db.once('open', () => {
    // start the Express server
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the Apollo server
startApolloServer(typeDefs, resolvers);
