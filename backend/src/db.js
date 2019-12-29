// This file connects to the remote prisma db, and lets us query it with javascript
const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.SECRET,
  debug: true
});

module.exports = db;
