export default {
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "picture",
      title: "Picture",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
