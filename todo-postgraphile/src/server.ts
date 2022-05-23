import express from "express";
import { postgraphile } from "postgraphile";
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import PgManyToManyPlugin from "@graphile-contrib/pg-many-to-many";
import ConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import cors from "cors";

const DATABASE_URL = process.env.URL;

const SCHEMA_NAMES =  process.env.SCHEMA_NAMES;
console.log(DATABASE_URL, SCHEMA_NAMES)
const postgraphileOpt = {
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
  exportJsonSchemaPath: "schema.json",
  exportGqlSchemaPath: "schema.graphql",


  appendPlugins: [
    PgSimplifyInflectorPlugin,
    PgManyToManyPlugin,
    ConnectionFilterPlugin,
  ],
  graphileBuildOptions: {
    connectionFilterRelations: true,
  },

}

const app = express();
app.use(cors())
app.use(postgraphile(DATABASE_URL, SCHEMA_NAMES, postgraphileOpt))



app.listen(6060);
