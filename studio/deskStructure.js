import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = (listItem) => !["about"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentListItem()
        .schemaType("about")
        .title("About")
        .child(S.document().schemaType("about").documentId("about")),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
