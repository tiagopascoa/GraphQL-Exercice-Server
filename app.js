const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");
const mongoose = require("mongoose");
require('dotenv').config();


const app = express();

//connect to MongoDB Atlas database
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open",  () => {
    console.log("connected to database!");
})

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening for requests on port 4000")
});