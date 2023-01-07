import { queryDatabase } from "./queryDatabase";

export const getPublishedPosts = async () => {
  const result = await queryDatabase(process.env.DATABASE_ID!, [
    {
      filter: {
        filter: {
          operator: "checkbox_is",
          value: { type: "exact", value: true },
        },
        property: "Published",
      },
    },
  ]);
};
