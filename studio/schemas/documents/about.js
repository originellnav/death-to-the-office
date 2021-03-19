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
      name: "trendsHeader",
      title: "Trends Header",
      type: "text",
    },
    {
      name: "trendsText",
      title: "Trends Text",
      type: "text",
    },
    {
      name: "instagram",
      title: "Instagram URL",
      type: "string",
    },
    {
      name: "twitter",
      title: "Twitter URL",
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
