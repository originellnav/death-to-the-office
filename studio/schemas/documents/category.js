export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
