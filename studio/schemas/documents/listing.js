export default {
  name: "listing",
  type: "document",
  title: "Listing",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "categoryReference",
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
