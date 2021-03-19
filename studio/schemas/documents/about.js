export default {
  name: "about",
  type: "document",
  title: "About",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "newsletter",
      title: "Newsletter Text",
      type: "string",
    },
    {
      name: "picture",
      title: "Picture",
      type: "image",
    },
    {
      name: "info",
      title: "Info",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "mission",
      title: "Mission",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
