// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import author from "./documents/author";
import category from "./documents/category";
import listing from "./documents/listing";
import post from "./documents/post";

import categoryReference from "./objects/categoryReference";

export default createSchema({
  name: "default",
  types: schemaTypes // Built-in types
    // Our custom types
    .concat([author, category, listing, post, categoryReference]),
});
