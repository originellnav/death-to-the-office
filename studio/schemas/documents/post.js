export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "portableText",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "metaCard",
      title: "Meta",
      type: "metaCard",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
