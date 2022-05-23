"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postgraphile_1 = require("postgraphile");
const pg_simplify_inflector_1 = __importDefault(require("@graphile-contrib/pg-simplify-inflector"));
const pg_many_to_many_1 = __importDefault(require("@graphile-contrib/pg-many-to-many"));
const postgraphile_plugin_connection_filter_1 = __importDefault(require("postgraphile-plugin-connection-filter"));
const cors_1 = __importDefault(require("cors"));
const DATABASE_URL = process.env.URL;
const SCHEMA_NAMES = process.env.SCHEMA_NAMES;
console.log(DATABASE_URL, SCHEMA_NAMES);
const postgraphileOpt = {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    exportJsonSchemaPath: "schema.json",
    exportGqlSchemaPath: "schema.graphql",
    appendPlugins: [
        pg_simplify_inflector_1.default,
        pg_many_to_many_1.default,
        postgraphile_plugin_connection_filter_1.default,
    ],
    graphileBuildOptions: {
        connectionFilterRelations: true,
    },
};
const app = express_1.default();
app.use(cors_1.default());
app.use(postgraphile_1.postgraphile(DATABASE_URL, SCHEMA_NAMES, postgraphileOpt));
app.listen(6060);
